const MAX_FONT_SIZE = 42

document.addEventListener('DOMContentLoaded', function () {
  const html = document.querySelector('html')
  /**
   * @rootFontSize 定义一个标准值来做屏幕的限定
   */
  let rootFontSize = window.innerWidth / 10
  rootFontSize = rootFontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : rootFontSize
  html.style.fontSize = rootFontSize
})