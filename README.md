# TheOfficePlants

Our goal is to keep our 5 plants alive! This is an application that enables users to water our plants remotely.

## How to run
ASP.NET Backend
1. In Visual Studio, run the 'backend' server
2. This should open up a webpage to 'http://localhost:5000/plants' 

React Frontend
1. run 'npm install' in the frontend directory
2. run 'npm start' to launch the browser
3. The webpage will now try to connect to 'http://localhost:5000/plants'


## Troubleshooting
* if Visual Studio's server does not open up to 'http://localhost:5000/plants', a tweak to the correct server will be required.
You can find the area to be tweaked in frontend/src/services/plants.js 

```javascript
    const axiosIntance = axios.create({
        baseURL: 'new-url-here',
    })
```

## Other
### Assumptions:
- A plant takes 10 seconds to water from 0 to 10, thus each second increases one water level

### Notes:
- If you water a plant once, for example from 0 -> 1. It resets the hoursSinceWatered to 0. Thus, after an hour, the plant will be at level 0, but the user won't be alarmed since it hasn't been 6 hours. 
- Some error warnings have been left for debugging purposes

### Potential extensions:
- Generate a report based on SQL table (ie average waterlevel during given time of day)
- Responsive design
