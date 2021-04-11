# TheOfficePlants

Our goal is to keep our 5 plants alive! This is an application that enables users to water our plants remotely.

## How to run
ASP.NET Backend
1. In Visual Studio, open to backend directory
2. Change the program from IIS Express to backend and run the server
3. This should open up a webpage to 'http://localhost:5000/plants' with JSON elements

React Frontend
1. Open frontend directory in IDE of choice
2. run 'npm install' in the frontend directory
3. run 'npm start' to launch the browser
4. The opened webpage will now try to connect to he backend server at 'http://localhost:5000/plants'

## Troubleshooting
* if Visual Studio's server does not open up to 'http://localhost:5000/plants', a tweak to the correct server will be required.
You can find the area to be tweaked in frontend/src/services/plants.js 

```javascript
    const axiosIntance = axios.create({
        baseURL: 'new-url-here',
    })
```

## Features
* Lists all plants on web page and corresponding watering status
* Begin and cease watering plant
* Can water multiple plants simultaneously
* Prevent over-watering with 30 second watering cooldown
* Visual warning when plant has not been watered in over 6 hours

## Other
### Screenshot:
![Image of Application](https://github.com/AlKL/TheOfficePlants/blob/main/frontend/src/images/screenshot.PNG)

### Assumptions:
- A plant takes 10 seconds to water from 0 to 10, thus each second increases one water level
- A plant dehydrates by 1 water level every hour

### Notes:
- If you water a plant once, for example from 0 -> 1. It resets the hoursSinceWatered to 0. Thus, after an hour, the plant will be at level 0, but the user won't be alarmed since it hasn't been 6 hours. 
- Some error warnings have been left for debugging purposes

### Potential extensions:
- Generate a report based on SQL table (ie average waterlevel during given time of day)
- Responsive design
- Add and delete plants
- Update plant picture