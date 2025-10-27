Crypto Tracker

A real-time cryptocurrency tracker built with React, TypeScript, React Query, TanStack Table, MUI, and styled-components. Features include search, filtering, sorting, dark/light mode, and automatic data updates.

Setup Instructions
git clone https://github.com/Pratiksha-24/home-assignment/tree/main
cd crypto-price-tracker

npm install
npm start

Features

Fetches real-time cryptocurrency data from https://www.coingecko.com/en/api
Search coins by name.
Filter coins: all, top 10, gainers, losers.
Sort by rank, price, or 24hours change.
Dark/light mode toggle.
Handling of loading, error, and empty states.

Fully styled using styled-components while leveraging MUI components for consistent UI.

Technical Choices
| Feature                   | Choice                | Reason                                                                  |
| ------------------------- | --------------------- | ----------------------------------------------------------------------- |
| Data fetching & caching   | **React Query**       | Handles caching, auto-refetch, error/loading states seamlessly.         |
| Table sorting & structure | **TanStack Table**    | Lightweight, flexible, and supports sorting/filtering out of the box.   |
| UI components             | **MUI**               | Prebuilt components for consistency and accessibility.                  |
| Styling                   | **styled-components** | Scoped, reusable styles and easy theme-based styling (dark/light mode). |
| Type safety               | **TypeScript**        | Ensures reliability, easier debugging, and better IDE support.          |


AI Usage

AI (ChatGPT) was used to generate  API choices and provide architecture suggestions.
All functional logic, refactor code, and component structuring were reviewed and tested manually.

Scaling & Team Practices

Component-based architecture for maintainability.
React Query allows caching, polling, and background updates — reducing API load and improving UX.
TypeScript ensures type safety across multiple developers.
Theming support via MUI + styled-components enables easy design updates.
Testing: Unit tests can be written using @testing-library/react for core components (e.g., table rendering, search/filter logic).

Code reviews & branching:
Use feature branches for enhancements.
PR reviews ensure code quality and maintain consistency.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


