/**
 * Picture-in-Picture
 * Editor’s Draft, 30 October 2018
 * https://wicg.github.io/picture-in-picture/
 * @param pictureInPictureEnabled
 * Repo: https://github.com/brunomacedo/video-picture-in-picture
 */

(() => {
  try {
    main()
  } catch (e) { }
})()

function getVideoElement() {
  let videos
  while (document.body.contains(document.querySelector("video"))) {
    return document.querySelector("video")
  }

  return false
}

function main() {
  const video = getVideoElement()
  const container = video.parentNode

  /* GET VIDEO WIDTH */
  // video.getBoundingClientRect()

  const buttonB = document.createElement('button')

  buttonB.className = 'yt-float-button'
  buttonB.innerText = 'Float'

  container.insertBefore(buttonB, video)

  const togglePipButton = document.querySelector('.yt-float-button')
  const styleFloatButton = document.createElement('style')

  styleFloatButton.innerText = `
    .yt-float-button {
      display: block !important;
      position: absolute !important;
      left: 50% !important;
      top: 10px !important;
      z-index: 99999 !important;
      transform: translateX(-50%) !important;
      text-indent: -9999px !important;
      font-size: 0 !important;
      white-space: nowrap !important;
      overflow: visible !important;
      width: 40px !important;
      height: 40px !important;
      border: 0 !important;
      background-color: transparent !important;
      background-image: url(https://i.imgur.com/3KUHz3g.png) !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      background-size: contain !important;
    }`

  typeof container !== 'undefined' ? container.append(styleFloatButton) : console.log('null')

  togglePipButton.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture
  togglePipButton.addEventListener('click', function (event) {
    if(event.stopPropagation) event.stopPropagation()

    if (!document.pictureInPictureElement) {
      video.requestPictureInPicture()
        .catch(error => console.error(error))
    } else {
      document.exitPictureInPicture()
        .catch(error => console.error(error))
    }
  })
}
