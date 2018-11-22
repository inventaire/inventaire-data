const marked = require('marked')

const resources = [
  {
    id: 'read',
    header: 'Read the database',
    image: null,
    state: 'todo',
    text: ''
  },
  {
    id: 'write',
    header: 'Edit the database',
    image: null,
    state: 'todo',
    text: ''
  },
  {
    id: 'api',
    header: 'API',
    image: null,
    state: 'todo',
    text: ''
  },
  {
    id: 'dumps',
    header: 'Dumps',
    image: null,
    state: 'todo',
    text: ''
  },
  {
    id: 'query',
    header: 'Query',
    image: null,
    state: 'todo',
    text: ''
  },
  {
    id: 'statistics',
    header: 'Statistics',
    image: null,
    state: 'todo',
    text: ''
  }
]

const buildResource = data => {
  const { id, state, image, header, text } = data
  const img = image ? `<img src="${image}" />` : ''

  return `
  <li id="$[id}" class="${state}">
    <div class="illustration">${img}</div>
    <div class="description">
      <h3>${header}</h3>
      <p>${marked(text)}</p>
    </div>
  </li>`.trim()
}

module.exports = resources.map(buildResource).join('\n')
