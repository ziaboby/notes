# Notes app

This is a notes app where people can add their annotations.\
Notes from other users are downloaded from a static file as no server is currently implementated.\
For the same reason, currently user notes are simply stored in the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). They will be available till site data are not cleared.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
The sample data was generated from [Mockaroo](https://www.mockaroo.com/), while the image credits go to [Lorem Picsum](https://picsum.photos/).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run prettier:format:src`

Format files under _src_ folder, based on Prettier config from the root of the project tree.
