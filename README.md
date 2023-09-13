### `Deployed Project`



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `Architecture Overview`

The architecture is built around React's functional components written in TypeScript. useRef preserved last valid user input in input fields, preventing unnecessary re-renders.

SCSS was used for styling, with classNames library for conditional styles.

The application is prepared for deployment using GitHub pages.

### `Technology Stack Summary`

I used React's hooks - useState, useEffect, and useRef for managing state and side-effects.

useState preserved component states between re-renders, and useEffect managed side-effects.

useRef maintained mutable variables across re-renders. These hooks improved the maintainability and readability of the project.
