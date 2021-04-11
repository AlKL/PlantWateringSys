# SVPlants

Our goal is to keep 5 plants alive! This is an application that enables users to water our plants remotely.

Assumptions:
- A plant takes 10 seconds to water from 0 to 10, thus each second increases one water level
- 

Issues:
- If you water a plant once, for example from 0 -> 1. It resets the hoursSinceWatered to 0. Thus, after an hour, the plant will be at level 0, but the user won't be alarmed since it hasn't been 6 hours. 

Potential:
