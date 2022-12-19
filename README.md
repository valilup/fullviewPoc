# E2E TestCafe Fullview PoC

### HOW TO START
Clone the project and install the project dependencyes 
```npm install```

In order for the tests to run, create a ```.env```file in the root of the project and populate it with the required data 

### RUN
Run the tests on chrome browser:
```
npm run test      // runs tests chrome browser
npm run report    // runs tests chrome browser and generates HTML reports with screen shoots on fail
npm run headless  // runs tests headless chrome browser
```

### REPORTS
A "reports" folder will be created in the root folder of the project containig a HTML report and screen shoots taken of the page if the test fails.