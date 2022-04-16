# luxafor-automate
App written for my wife.
It changes luxafor [flag](https://luxafor.com/flag-usb-busylight-availability-indicator/), [orb](https://luxafor.com/orb-usb-busylight-availability-indicator/) or [button](https://luxafor.com/luxafor-microphone-mute-button/) color depending on apps what currently ran on Windows machine.

## How to use:
This app works on Windows OS only.
### install dependencies:
run `npm install`

### Check your currently running processes
run `npm test` You should see all currently running processes.
choose processName what you are interested in and put in to config.json

### config.json structure
```
{
  "defaultColor":"#228C22", - flag color when there is no processes running
  "brightness": "0.5", - flag brightness
  "animationTime": "10", - chaning color animation time
  "checkInterval": "5", - time between check Process running in seconds
  "rules": [ - rulles first match always wins.
    {
      "processName": "chrome", - process name 
      "color": "#4adede" - color in hex
    },
    {
      "processName": "Gw2-64",
      "color": "#ff0000"
    }
  ]
}
```
### how to run
run `npm start`

### how to install as Windows service:
run `npm run installService`

### how to uninstall  Windows service:
run `npm run uninstallService`

## TODO:
1. Add support for multiple luxafor devices connected to the same computer.
2. Add support for macOS.
3. Add more triggers. 

# Licence 
This project is libre, and licenced under the terms of the
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENCE, version 3.1,
as published by dtf on July 2019. See the COPYING file or
https://ph.dtf.wtf/w/wtfpl/#version-3-1 for more details.
