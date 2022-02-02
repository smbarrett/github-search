# Simple Github Search App

This app gives a super basic user interface to search for repos by user name using Material UI. It will serve the first 15 repos found and sorted by # of times the repo was starred.

## Instructions

1. First clone the repo!
2. Navigate to src search-app folder.
3. Run `npm start`. This will bring up a local instance of the app and should automagically open a tab of the app once it has finished loading.
4. Test the app with your own search queries!
5. To run test files, run `npm test`.

## Improvements

If I had more time I think there are a number of things I'd improve, given this is a super simple app, but a good exercise in getting a react up and running since most of the time on the daily you work with already build out react apps.

First I would definitely get a better state management system in place. The essential global state I'm using is terrible for further building new features and functionality. I didn't include mobx, which I'm most familiar, as I thought the set up time wouldn't be as productive. By decoupling the state, we can do a lot more cool stuff and more easily populate components, make components more reusable perhaps, as well as further separate any fetch calls or data manipulation.

I would've also liked to get a better UX going as this is really bare bones and I think things could be moved around to make it a little easier to know where to expect the data to pop up. It is usable but isn't the prettiest or really tailored to what a user might actually need. I tried to make the components as reusable as possible, but defintiely could have dove further into that.

Lastly, I would love to get some better validation on the input. Right now you can technically enter in an empty search, which ideally we want to prevent that. Would have been a great little add.