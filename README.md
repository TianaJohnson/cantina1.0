
# Target Info
    This is the solo project I built at Prime. I built it for two local buisness owners that needed to share customer information on collaborative custome bicycle builds. I am most proud of the reuse of customer information through id. This can be seen in my components/UserPage/AddNewCustomer.js, redux/reducers/customerReducer.js and redux/sagas/customerSaga.js. It is also used in components/ProjectPage/ProjectPage.js, redux/reducers/projectReducer.js and redux/sagas/projectSaga.js. I also just finally figured out how to impliment Nodemailer into a project outside of a spike. I had some hiccups and its currently not vary prett, but it works and I am stoked on that. To me, this is an incomplete project but it is the project I am most proud of over all.


## Prerequisites/Software Used
- Node.js
- Postico
- Terminal
- React
- React-Redux
- Passport
- Saga
- Material UI


## Installing

- Download project
- `npm install`
- `npm run server`
- `npm run client`


## Screen Shot
/Users/tianajohnson/Prime/Tier3/Cantina/public/images/Screen shot of dashboard.png

## Create Database
   Create a new database "cantina_app". Input information found in `database.sql`. There is provided stock customer info if need be. 

## Completed Features

- Login/register as a secure user with Passport.
- Add new Customer from Dashboard
- View/Archive Customers from Dashboard.
- Customer project files attached by id that can be edited while inside.
- Page with a form to collect customer information.
- Page with a form to collect customer project build information.
- Communication/ Status page for users to communicate.
- Page to display image data and build status.
- Nodemailer implimented. Test email attached.


## Future Features

- More detailed intake for customer information.
- Customer facing side showing progress reports of the build.
- Actual working communication page.
- img upload. ( being spiked)
- Sweet Alerts. ( installed, not yet implemented)

## Deployment

- In the future I will deploy this to Heroku.


## Acknowledge 

- We would like to thank Chris Black, Luke Schlangen, and Dane aka DoctorHowser for the base assignment code.
- We would additionally like to thank Kris Szfranski and Ally Boyd.
- Thanks to our cohort, Zaurak.


