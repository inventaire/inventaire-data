# [data.inventaire.io](https://data.inventaire.io)

This repo generates the HTML + CSS files that make [data.inventaire.io](https://data.inventaire.io)

## Development
```sh
# install
git clone https://github.com/inventaire/inventaire-data.git
cd inventaire-data
npm install

# in one terminal
npm run watch

# in another terminal
npm start
```

## Deploy
Setup some HTTP file server, for instance with Nginx:
```nginx
server {
  listen 443 ssl http2;
  server_name data.inventaire.io;

  # See https://letsencrypt.org to get an SSL certificate
  # and https://ssl-config.mozilla.org for updated Nginx SSL parameters

  root /home/yourserverusername/inventaire-data;
}
```

```sh
npm run build
rsync -ahz --delete --progress ./public/ yourserverusername@yourserverip:~/inventaire-data
```
