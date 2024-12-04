# [Original assignment found here](https://github.com/SchipholRedesign/frontend-assignment)

# How to run this application

- Clone this repository
- Run `$ pnpm i`
- Run `$ pnpm run dev` and navigate to `http://localhost:5173/` to view the application

# How to test this application

- Run `$ pnpm run test` to run the Vitest tests based in `/tests`
- Uncomment the error throw on line `22` in `flightsApiService.ts` to check out the `ErrorBoundary`

# Design choices log

- Initiated the project using Vite, for its lightweight bundle and strong performance
- Initiated testing using Vitest (because we're already using Vite)
- Did _not_ initiate a framework like NextJS or Remix due to the small size of this project
- Initiated `prettier` for consistent formatting throughout the codebase
- Developed all changes on the `develop` branch, not using a feature branch due to the size of this project
- Using plain css and plain classes to keep it simple, using prefixes to ensure scope safety
- Created a dummy `flightsApiService` including a fake loading time, returning the provided `flights.json`
- Slightly updated the flights data to have a few items with different originalTime from expectedTime
