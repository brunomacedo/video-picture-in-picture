/**
 * Picture-in-Picture
 * Editor’s Draft, 30 October 2018
 * https://wicg.github.io/picture-in-picture/
 * @param pictureInPictureEnabled
 * Repo: https://github.com/brunomacedo/video-picture-in-picture
 */
const video = document.querySelector('video')
const container = video.parentNode.parentNode

const buttonB = document.createElement('button')
  buttonB.className = 'yt-float-button'
  buttonB.innerText = 'Float'
  container.append(buttonB)

const togglePipButton = document.querySelector('.yt-float-button')
const styleFloatButton = document.createElement('style')
  styleFloatButton.innerText = `
  .yt-float-button {
    display: block;
    position: absolute;
    left: 50%;
    top: 10px;
    z-index: 850;
    transform: translateX(-50%);
    text-indent: -9999px;
    font-size: 0;
    white-space: nowrap;
    overflow: visible;
    width: 40px;
    height: 40px;
    border: 0;
    background-color: transparent;
    background-image: url(https://i.imgur.com/3KUHz3g.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }`

  typeof container !== 'undefined' ? container.append(styleFloatButton) : console.log('null')

togglePipButton.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture
  togglePipButton.addEventListener('click', function() {
    if (!document.pictureInPictureElement) {
      video.requestPictureInPicture()
      .catch(error => {
        // Video failed to enter Picture-in-Picture mode.
      })
    } else {
      document.exitPictureInPicture()
      .catch(error => {
        // Video failed to leave Picture-in-Picture mode.
      })
    }
  })
