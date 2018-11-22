const marked = require('marked')
const resources = require('./resources_list')

const buildResource = data => {
  const { id, size, state, image, header, text } = data

  const convertedText = marked(text.trim())

  const style = image ? `style="background-image: url(assets/${image})"` : ''

  const sizeClass = size || ''

  return `
  <li id="${id}" class="resource ${state} ${sizeClass}">
    <div class="illustration" ${style}></div>
    <div class="description">
      <h3>${header}</h3>
      <p>${convertedText}</p>
    </div>
  </li>`.trim()
}

module.exports = resources.map(buildResource).join('\n')
