module.exports = [
  {
    id: 'contribute',
    header: 'Contribute',
    image: 'editor_square.jpg',
    size: 'big',
    state: '',
    text: `
To **edit authors, series, works, or editions data**, you first need to [create an account](https://inventaire.io/signup), then you can look for desired entity from the search bar at the top, select the entity, and click on the pencil on the top right of the page. Or have a look at URLs: from any entity's page, add \`/edit\` to the URL to get to the data editor.

**Examples**:
* if a work can be found at [/entity/inv:0a68df5f187729a463e3b74ee80f0b1a](https://inventaire.io/entity/inv:0a68df5f187729a463e3b74ee80f0b1a), its editor will be at [/entity/inv:0a68df5f187729a463e3b74ee80f0b1a/edit](https://inventaire.io/entity/inv:0a68df5f187729a463e3b74ee80f0b1a/edit)

**See also**:
* [Documentation on inventaire books data: data sources, data model, and more](https://wiki.inventaire.io/wiki/Data)
`
  },
  {
    id: 'api',
    header: 'API',
    image: 'api_json_dark.jpg',
    size: 'big',
    state: '',
    text: `
Mimicking the [Wikidata API](https://www.wikidata.org/w/api.php) data model, the [Inventaire API](https://api.inventaire.io/#/Entities) lets you download both Wikidata and Inventaire entities in a simplified format. Notice that you can easily jump from an entity's page to the corresponding json data by adding \`.json\` at the end of the URL.

Example: [/entity/inv:0a68df5f187729a463e3b74ee80f0b1a.json](https://inventaire.io/entity/inv:0a68df5f187729a463e3b74ee80f0b1a.json)
    `
  },
  {
    id: 'query',
    header: 'SPARQL Query',
    image: 'inventaire_query_service.jpg',
    state: '',
    text: "Inventaire now has its own SPARQL Query interface! It's still somewhat experimental/unstable, but you can already play with it: [query.inventaire.io](https://query.inventaire.io)"
  },
  {
    id: 'dumps',
    header: 'Dumps',
    image: 'dump.jpg',
    state: '',
    text: '[Yeay, dumps!](https://dumps.inventaire.io)'
  },
  {
    id: 'statistics',
    header: 'Statistics',
    image: null,
    state: 'coming-soon',
    text: ''
  }
]
