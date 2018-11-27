module.exports = data => {
  const { intro, resources } = data
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Inventaire data</title>
    <link rel="stylesheet" href="style.css">
    <!-- TWITTER -->
    <meta name="twitter:title" content="Inventaire - The Wikidata-federated open bibliographic database">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@inventaire_dev">
    <meta name="twitter:description" content="The Inventaire project has two cores working in synergy: this page is about the open data project">
    <meta name="twitter:image" content="https://data.inventaire.io/assets/inv_data_screenshot.jpg">

    <!-- FACEBOOK -->
    <meta property="og:site_name" content="Inventaire Data">
    <meta property="og:url" content="https://data.inventaire.io/">
    <meta property="og:title" content="Inventaire - The Wikidata-federated open bibliographic database">
    <meta name="description" property="og:description" content="The Inventaire project has two cores working in synergy: this page is about the open data project" />
    <meta property="og:image" content="https://data.inventaire.io/assets/inv_data_screenshot.jpg">
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
