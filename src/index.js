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
    <section id="landing">
      <div id="text-wrapper">
        <h1>inventaire</h1>
        <h2>The Wikidata-federated open bibliographic database</h2>
        <div id="intro">${intro}</div>
      </div>
      <div id="landing-overlay"></div>
    </section>
    <ul id="resources">${resources}</ul>
  </body>
  </html>`
}
