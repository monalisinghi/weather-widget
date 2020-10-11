## Solution Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used `bootstrap` for styling the widget and `use-position` custom hook to get user location coordinates.

This widget will require location permission to identify user's current location. If permission is denied, user will see a default error message. 

Used [MetaWeather](https://www.metaweather.com/) APIs to request weather data. 
This API does not provide data like `Precipitation`, `Pollen count` etc. 
I have used `Min Temp`, `Max Temp` and `Wind (seepd and direction)` instead. 
MetaWeather `location` API returns 6 days weather data by default, additional days can be requested using other APIs. 
I have spent around 8 hours to build this widget, skipped location search for now and will approach location search similarly as my current solution.

There are few Unit tests focused on functional aspects of the application to showcase my approach towards testing. 

Please use CORS plugin like [Moesif Origin & CORS Changer
](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) to override Request Origin and CORS headers.


## Available Scripts

In the project directory, you can run:

### `npm install`

This will install project dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.