import $ from 'jquery'
export default function message(text) {
  let body = $('body')
  let layer = $('<div class="layer"></div>')
  let message = $('<div class="message"></div>')
  message.text(text)
  layer.append(message)
  body.append(layer)

  setTimeout(() => {
    layer.remove()
  }, 1000)
}
