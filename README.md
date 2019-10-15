# BSc-NMEA

Application is built using React Native and Expo technologies, along with Typescript.

## Local setup

To start an app locally run

```
    npm i
    npm run start
```

You need to have Node installed (10.15.3 or LTS)
To access the app using mobile phone have Expo installed and scan QR code from localhost expo (localhost:19002 when app is running).
Alternatively create virtual device using Android Studio and press 'a' in the console that is running the app.

For simulating NMEA provider use
https://chrome.google.com/webstore/detail/nmea-simulator/dfhcgoinjchfcfnnkecjpjcnknlipcll?hl=pl

Install, go to options -> settings -> server then set TCP/IP options to Web Socket 192.168.1.10:86 (url is hardcoded for now).

