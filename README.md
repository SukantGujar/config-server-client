# config-server-client
This is a client library for (config-server)[https://github.com/SukantGujar/config-server] application for nodejs and browser environments.

# Installation
## With yarn
`yarn install config-server-lite-client`
## With npm
`npm install config-server-lite-client`

> This library uses `axios` as peerDependency for requests. Please provide one in your project.

# Usage
## Nodejs
```
var clientFactory = require("config-server-lite-client"),
client = new clientFactory("http://config-server-host:port/api", "clientapikey");

client.readConfig().then(configJson => console.log(configJson));

```

## Browser with Webpack

```
import ConfigServerClient from "config-server-lite-client";

const client = new ConfigServerClient("http://config-server-host:port/api", "clientapikey");

client.readConfig().then(configJson => console.log(configJson));

```