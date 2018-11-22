module.exports = data => {
  const { intro, resources } = data
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Inventaire data</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Inventaire </h1>
    <h2>The Wikidata-federated open bibliographic database project</h2>
    <section id="intro">${intro}</section>
    <ul id="resources">${resources}</ul>
  </body>
  </html>`
}
