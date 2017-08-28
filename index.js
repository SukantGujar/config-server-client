let axios = require("axios");

function extractData(response){
  if (response.status == 200) {
    return response.data;
  }

  throw new TypeError(`Invalid response received: ${response}`);
}

class ConfigServerClient {
  constructor(configServerUrl, authKey, axiosOptions){
    if (!configServerUrl){
      throw new TypeError(`Missing parameter: configServerUrl`);
    }

    if (!authKey){
      throw new TypeError(`Missing parameter: authKey`);
    }

    axiosOptions = axiosOptions || {};

    this.client = axios.create(
      Object.assign(
        {
          timeout : 3000,
        },
        axiosOptions,        
        {
          baseURL : configServerUrl,
          headers : {
            "Content-Type": "application/json",
            "x-auth-token": authKey
          }
        }
      )
    );

    this.url = configServerUrl;
  }
  readConfig(){
    return this.client.get("/config")
    .then(extractData)
  }
  writeConfig(config){
    return this.client.post("/config", config)
    .then(extractData)
  }
}

module.exports = ConfigServerClient;