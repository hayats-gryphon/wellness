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

const color = 'aqua'

export function drawPoint(ctx, y, x, r) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
}

// eslint-disable-next-line max-params
export const hitAMole = (
  holes,
  keypoints,
  minConfidence,
  soundElem,
  updateScore,
  parentBox
) => {
  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i]

    if (keypoint.score < minConfidence) {
      continue
    }
    let parent = parentBox.current.getBoundingClientRect()
    const {y, x} = keypoint.position

    // Here we are taking special action only for keypoints[0] because that's the nose!
    if (i === 0) {
      holes.forEach(hole => {
        const holeRef = hole.el
        const holeBox = holeRef.getBoundingClientRect()
        const left = holeBox.left - parent.left
        const right = holeBox.right - parent.left
        const top = holeBox.top - parent.top
        const bottom = holeBox.bottom - parent.top

        if (x > left && x < right && y > top && y < bottom) {
          if (Array.from(holeRef.classList).includes('mole')) {
            holeRef.classList.toggle('mole')
            soundElem.current.play()
            updateScore(1)
          }
        }
      })
    }
  }
}

/**
 * Draw pose keypoints onto a canvas
 */
export function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i]

    if (keypoint.score < minConfidence) {
      continue
    }

    const {y, x} = keypoint.position

    drawPoint(ctx, y * scale, x * scale, 3, color)
  }
}
