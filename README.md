# Locate Vessel

A meteor app with React-based fronted for locating vessels using aprs.fi api and showing them on a map.

## How to run

1. Clone the project
```shell
git clone https://github.com/SergeyVolynkin/VesselLocateChallenge.git
cd VesselLocateChallenge
```

2. Install dependencies
```shell
meteor npm install
```

3. Fill API keys to the Keys.js (in the root folder)
```shell
export const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'
export const APRS_FI_API_KEY = 'YOUR_APRS_API_KEY'
```

4. Run meteor app
```shell
meteor
```
