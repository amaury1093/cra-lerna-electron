const { ipcRenderer, remote } = require('electron');

if (remote) {
  window.ipc = ipcRenderer;
}
