# home-assignment

#Crypto-price-tracker
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
