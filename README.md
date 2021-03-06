# Pingr

Pingr is a Service Matchmaker that matches a user's demands for professional services with businesses that provide them. Users are able to specify certain criteria such as their availability and the price they're willing to pay for the service and send out requests. Businesses can then match requests that fit their schedule.

## Final product

!["Home page when a user is not logged in "](https://raw.githubusercontent.com/Gascon1/pingr/master/docs/login-screen.png)

!["Home page of a user after authentication"](https://raw.githubusercontent.com/Gascon1/pingr/master/docs/user-home-page.png)

!["Search form used to put in a new request"](https://raw.githubusercontent.com/Gascon1/pingr/master/docs/search-form.png)

!["Queued request with request details"](https://raw.githubusercontent.com/Gascon1/pingr/master/docs/queued-request.png)

!["Business side of the request, where they can choose a specific time and book a user"](https://raw.githubusercontent.com/Gascon1/pingr/master/docs/business-side-requests.png)

!["Confirmed request on the user side, with all the details and a link to google maps"](https://raw.githubusercontent.com/Gascon1/pingr/master/docs/confirmed-request.png)

## Getting started

1. Install dependencies using the `npm install` command from the pingr directory as well as the client directory.
2. Open 2 terminals.
3. Run the Client using the `npm start` command from the client directory.
4. Run the Server using the `npm run dev` or `npm start` command from the pingr directory.
5. Go to <http://localhost:8000/> in your browser to see the app.
6. If you wanna see the app's full potential, you can create a business account from the hamburger menu at the top right, and have two tabs open, one on business side, one on user side.
7. If you want to use twilio, you will need to create an account and uncomment the twilio code in put_requests.js
8. Enjoy!

## Dependencies

- React
- Node.js
- Express
- Json Web Token
- WebSockets
- Twilio
