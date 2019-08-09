# My humble website

[![Netlify Status](https://api.netlify.com/api/v1/badges/13d21e17-86f2-428a-8307-93ab9a2b6106/deploy-status)](https://app.netlify.com/sites/isensee/deploys)

This is my humble website created with CRA.

## Installation

```
yarn install
```

## Running

```
yarn start
```

## Testing

```
yarn test
```

## Deploying

Make sure you have `netlify-cli` installed globally and already logged in with your netlify account through the command `netlify login`, this will open netlify login/authorization in a browser to create a link between the project and netlify.
After this proccess just run:

```
yarn deploy:preview
```
To deploy to preview version with different and temporary URL which will be displayed in the console.

```
yarn deploy
```
To deploy to production.
