# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Improvements

If I had more time I think there are a number of things I'd improve, given this is a super simple app, but a good exercise in getting a react up and running since most of the time on the daily you work with already build out react apps.

First I would definitely get a better state management system in place. The essential global state I'm using is terrible for further building new features and functionality. I didn't include mobx, which I'm most familiar, as I thought the set up time wouldn't be as productive. By decoupling the state, we can do a lot more cool stuff and more easily populate components, make components more reusable perhaps, as well as further separate any fetch calls or data manipulation.

I would've also liked to get a better UX going as this is really bare bones and I think things could be moved around to make it a little easier to know where to expect the data to pop up. It is usable but isn't the prettiest or really tailored to what a user might actually need. I tried to make the components as reusable as possible, but defintiely could have dove further into that.

Lastly, I would love to get some better validation on the input. Right now you can technically enter in an empty search, which ideally we want to prevent that. Would have been a great little add.