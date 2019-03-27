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

export function drawPoint(ctx, y, x) {
  let baseImage = new Image()
  baseImage.src = 'images/swat.png'

  baseImage.onload = function() {
    ctx.drawImage(baseImage, x - 30, y - 30)
  }
}

export function generateRandomSound() {
  let randomIdx = Math.floor(Math.random() * 5)
  const sounds = [
    'sounds/no2.mp3',
    'sounds/Hey 1.mp3',
    'sounds/Hey 2.mp3',
    'sounds/Hey 3.mp3',
    'sounds/no2.mp3'
  ]

  const sound = sounds[randomIdx]
  return sound
}

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

    if (parentBox.current === null) return
    let parent = parentBox.current.getBoundingClientRect()
    const {y, x} = keypoint.position

    // Here we are taking special action only for keypoints[0] because that's the nose!
    if (i === 0) {
      holes.forEach(holeRef => {
        const holeBox = holeRef.getBoundingClientRect()
        const left = holeBox.left - parent.left
        const right = holeBox.right - parent.left
        const top = holeBox.top - parent.top
        const bottom = holeBox.bottom - parent.top

        if (x > left && x < right && y > top && y < bottom) {
          if (Array.from(holeRef.classList).includes('mole')) {
            //Replace mole class with stars
            holeRef.classList.replace('mole', 'stars')

            //After a delay, turn off stars to just show the leaf
            setTimeout(() => holeRef.classList.toggle('stars'), 500)

            //Generate random sound effect
            soundElem.current.src = generateRandomSound()
            soundElem.current.load()
            soundElem.current.play()
            updateScore(20)
          }
          if (Array.from(holeRef.classList).includes('flower')) {
            holeRef.classList.replace('flower', 'minus-points')
            setTimeout(() => holeRef.classList.toggle('minus-points'), 500)
            soundElem.current.src = generateRandomSound()
            soundElem.current.load()
            soundElem.current.play()
            updateScore(-15)
          }
          if (Array.from(holeRef.classList).includes('bee')) {
            holeRef.classList.replace('bee', 'bonus')
            setTimeout(() => holeRef.classList.toggle('bonus'), 500)
            soundElem.current.src = 'sounds/WIN.mp3'
            soundElem.current.load()
            soundElem.current.play()
            updateScore(30)
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
  let noseKeypoint = keypoints[0]

  if (noseKeypoint.score > minConfidence) {
    const {y, x} = noseKeypoint.position
    drawPoint(ctx, y * scale, x * scale, 3, color)
  }
}
