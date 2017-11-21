# Angular 4 application using theMovieDB APIs.

Steps to work on it or run in local

- Clone the repository
- Inside repository run `npm install`
- You will need to Add Your own theMovieDB API key in `src/app/shared/services/util.service.ts` file.
- It should look something like,

  Before:
  ```
  readonly apiKey: string = "REPLACE_THIS_WITH_YOUR_API_KEY"; // Add your API KEY here.
  ```
  After (below is a example key do not use the same):
  ```
  readonly apiKey: string = "94a6dasdsdfassdfasdf2322sdf12"; // Add your API KEY here.
  ```
- Save the file after adding your API Key.

## Now to start development server,

- Run `npm run serve`

To Create a Build file for Development environment,

- Run `npm run build:dev`
- Once it completes the process, run `npm start`

To Create a Build file for Production environment,

- Run `npm run build:prod`
- Once it completes the process, run `npm sart`
