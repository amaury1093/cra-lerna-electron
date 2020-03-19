const { Socket } = require("net");
const { exec } = require("child_process");
const client = new Socket();

const port = 3000;
let started = false;

const tryConnection = () =>   
  client.connect({ port: port }, () => {
    if (!started) {
      console.log("Electron is waiting...");
      started = true;
      exec("yarn electron-webpack dev").stdout.on("data", data => console.log(data.toString()));
    }
  });

client.on("error", () => setTimeout(tryConnection, 1000));

tryConnection();