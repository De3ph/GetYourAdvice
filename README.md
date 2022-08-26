# Vite + ReactJs + TailwindCss

<img src='https://user-images.githubusercontent.com/62203579/186967807-1aa871cc-cfc3-4c93-a292-51378fee77b2.png' alt='screenshot' height='560'></img>

## Before Running On Local

Get your X-RapidAPI-Key and X-RapidAPI-Host from [Motivational Quotes API on RapidAPI](https://rapidapi.com/bitbiscuit-bitbiscuit-default/api/motivational-quotes1/)

Create .env.local file in root and set your keys like this:

```shell
VITE_X_RAPID_API_KEY = {yourRapidApiKey}
VITE_X_RAPID_API_HOST_KEY = {yourRapidApiHostKey}
```

## Commands:

To start the dev server on your machine:

```shell
yarn dev
```

To start the dev server on your network:

```shell
yarn dev --host
```

To make the production build:

```shell
yarn build
```

To preview the production build locally:

```shell
yarn serve
```
