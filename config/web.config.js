
let capabilities = [
  {
    "bstack:options": {
      os: "Windows",
      osVersion: "11",
      browserVersion: "latest",
      resolution: "1920x1080",
      buildTag: "regression",
    },
    browserName: "Chrome",
  },

  {
    "bstack:options": {
      os: "OS X",
      osVersion: "Big Sur",
      browserVersion: "latest",
      buildTag: "regression",
      resolution: "2560x1600",
      
    },
    browserName: "Safari",
  },
];



module.exports ={
  capabilities
}