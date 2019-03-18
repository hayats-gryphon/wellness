/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as posenet from '@tensorflow-models/posenet'
import React from 'react'
import Board from './board'
import {connect} from 'react-redux'

import {
  drawBoundingBox,
  drawKeypoints,
  drawSkeleton,
  hitAMole
} from './posenet_utils'

class PunchABug extends React.Component {
  constructor() {
    super()
    this.state = {
      videoWidth: 600,
      videoHeight: 500,
      guiState: {
        algorithm: 'single-pose',
        input: {
          mobileNetArchitecture: '0.75',
          outputStride: 16,
          imageScaleFactor: 0.5
        },
        singlePoseDetection: {
          minPoseConfidence: 0.1,
          minPartConfidence: 0.5
        },
        multiPoseDetection: {
          maxPoseDetections: 5,
          minPoseConfidence: 0.15,
          minPartConfidence: 0.1,
          nmsRadius: 30.0
        },
        output: {
          showVideo: true,
          showSkeleton: true,
          showPoints: true,
          showBoundingBox: false
        },
        net: null
      }
    }
  }

  /**
   * Loads a the camera to be used in the demo
   *
   */
  setupCamera = async () => {
    const {videoWidth, videoHeight} = this.state
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        'Browser API navigator.mediaDevices.getUserMedia not available'
      )
    }

    const video = document.getElementById('video')
    video.width = videoWidth
    video.height = videoHeight

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
        width: videoWidth,
        height: videoHeight
      }
    })

    video.srcObject = stream

    return new Promise(resolve => {
      video.onloadedmetadata = () => {
        resolve(video)
      }
    })
  }

  loadVideo = async () => {
    const video = await this.setupCamera()
    video.play()

    return video
  }

  /**
   * Feeds an image to posenet to estimate poses - this is where the magic
   * happens. This function loops with a requestAnimationFrame method.
   */
  detectPoseInRealTime = video => {
    const {guiState, videoWidth, videoHeight} = this.state

    const canvas = document.getElementById('output')
    const ctx = canvas.getContext('2d')
    // since images are being fed from a webcam
    const flipHorizontal = true

    canvas.width = videoWidth
    canvas.height = videoHeight

    const poseDetectionFrame = async () => {
      // Scale an image down to a certain factor. Too large of an image will slow
      // down the GPU
      const imageScaleFactor = guiState.input.imageScaleFactor
      const outputStride = +guiState.input.outputStride

      let poses = []
      let minPoseConfidence
      let minPartConfidence

      const pose = await guiState.net.estimateSinglePose(
        video,
        imageScaleFactor,
        flipHorizontal,
        outputStride
      )
      poses.push(pose)

      minPoseConfidence = +guiState.singlePoseDetection.minPoseConfidence
      minPartConfidence = +guiState.singlePoseDetection.minPartConfidence

      ctx.clearRect(0, 0, videoWidth, videoHeight)

      if (guiState.output.showVideo) {
        ctx.save()
        ctx.scale(-1, 1)
        ctx.translate(-videoWidth, 0)
        ctx.drawImage(video, 0, 0, videoWidth, videoHeight)
        ctx.restore()
      }

      // For each pose (i.e. person) detected in an image, loop through the poses
      // and draw the resulting skeleton and keypoints if over certain confidence
      // scores
      poses.forEach(({score, keypoints}) => {
        if (score >= minPoseConfidence) {
          hitAMole(this.props.moleLocations, keypoints, minPartConfidence, ctx)

          if (guiState.output.showPoints) {
            drawKeypoints(keypoints, minPartConfidence, ctx)
          }
          if (guiState.output.showSkeleton) {
            drawSkeleton(keypoints, minPartConfidence, ctx)
          }
          if (guiState.output.showBoundingBox) {
            drawBoundingBox(keypoints, ctx)
          }
        }
      })

      requestAnimationFrame(poseDetectionFrame)
    }

    poseDetectionFrame()
  }

  /**
   * Kicks off the demo by loading the posenet model, finding and loading
   * available camera devices, and setting off the detectPoseInRealTime function.
   */
  bindPage = async () => {
    // Load the PoseNet model weights with architecture 0.75
    const net = await posenet.load(0.75)

    document.getElementById('loading').style.display = 'none'
    document.getElementById('main').style.display = 'block'

    let video

    try {
      video = await this.loadVideo()
    } catch (e) {
      let info = document.getElementById('info')
      info.textContent =
        'this browser does not support video capture,' +
        'or this device does not have a camera'
      info.style.display = 'block'
      throw e
    }

    this.setState(state => {
      return {guiState: {...state.guiState, net}}
    })

    this.detectPoseInRealTime(video, net)
  }

  componentDidMount() {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia
    this.bindPage()
  }

  render() {
    return (
      <React.Fragment>
        <div id="loading">Loading the model...</div>
        <div id="main" style={{display: 'none'}}>
          <video
            id="video"
            playsInline
            style={{
              MozTransform: 'scaleX(-1)',
              OTransform: 'scaleX(-1)',
              WebkitTransform: 'scaleX(-1)',
              transform: 'scaleX(-1)',
              display: 'none'
            }}
          />
          <Board />
          <canvas id="output" />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  moleLocations: state.board.moles
})

export default connect(mapStateToProps)(PunchABug)
