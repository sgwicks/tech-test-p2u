# Tech Test Pharmacy2U

## Setting up

Either clone down from github:

```
git clone https://github.com/sgwicks/tech-test-p2u
```

Or unzip the folder.

## Technology

NodeJS
Postgresql
Express
Knex
Axios
React
Jest
Supertest

This project was built with in a node environment. If you have downloaded from github you can install packages with 

```
npm install
```

The zip folder contains all required node modules and expects an installation of Postgresql for database management.

Knex is set up to expect a file `user.js` in the main project folder, containing user data for your PSQL setup:

``` js
module.exports = {
    user: /*username*/,
    password: /*password*/
}
```

## Running

The project is set up to run locally. In separate terminal windows (from the project folder):

``` bash
# Terminal 1: Runs an Express server on localhost:8080
node server.js
# Terminal 2: Runs a React server on localhost:3000
npm start
```

Tests can be run using `npm test`.

## Improvements

Due to conflicting events and time constraints I ended up having less time on this project than anticipated. This represents roughly 9 hours of work over the course of a single day (minus time for breaks). As such, there are plenty of improvements that could be made:

### Testing

The test suite is fairly bare compared to what I would usually expect. I didn't include tests for frontend, and there were no automatic tests for errors or bad requests. With more time I would have had a much more fully fleshed out test suite. Hopefully those tests provided show my technique and can be extrapolated upon.

### Error handling

The error handling is nowhere near robust enough to be considered stable. I added relevant catch blocks, but beyond that don't do anything when an error occurs. Bad requests and database errors are also unhandled. Along with testing, I would very much like to have spent an extra day working on these.

### Layout, Usability & Accessibility

This project focuses very much on core functionality, with almost no attempt at seeking a user friendly or aesthetically pleasing layout. With more time to focus on layout I would also have used accessibility testing apps to ensure maximum usability.

