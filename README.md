# [Original assignment found here](https://github.com/SchipholRedesign/frontend-assignment)

# How to run this application

- Clone this repository
- Run `pnpm i`
- Run `pnpm run dev` and navigate to `http://localhost:5173/` to view the application

# How to test this application

- TODO: add test scripts

# Design choices log

- Initiated the project using Vite, for its lightweight bundle and strong performance
- Did _not_ initiate a framework like NextJS or Remix due to the small size of this project
- Initiated `prettier` for consistent formatting throughout the codebase
- Developed all changes on the `develop` branch, not using a feature branch due to the size of this project
- Using plain css and plain classes to keep it simple, using prefixes to ensure scope safety
- Created a dummy `flightsApiService` including a fake loading time, returning the provided `flights.json`
  - Including a commented `reject` that can be enabled to show the error state
  - Decided to _not_ refetch the data using filters, due to the small size of the data set
- Slightly updated the flights data to have a few items with different originalTime from expectedTime
