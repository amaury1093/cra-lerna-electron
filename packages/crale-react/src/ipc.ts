const ipc: IpcRenderer | undefined = window.ipcRenderer;

// make sure console get a warning when ipc is undefined,
// obviously it won't work in actual broser
if (ipc === undefined) {
  console.log('IpcRenderer is not available here.');
}

export default ipc;
