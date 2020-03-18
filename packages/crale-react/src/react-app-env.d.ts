/// <reference types="react-scripts" />

interface Window {
  /**
   * Electron IPC (inter-process communication) for render process, which is
   * injected to window object by preload property in BrowserWindow from electron.
   * And won't work in a actual brower, so it may be undefined.
   */
  ipcRenderer: IpcRenderer | undefined;
}

interface IpcRenderer extends NodeJS.EventEmitter {
  // Docs: http://electronjs.org/docs/api/ipc-renderer

  /**
   * Resolves with the response from the main process.
   *
   * Send a message to the main process asynchronously via `channel` and expect an
   * asynchronous result. Arguments will be serialized as JSON internally and hence
   * no functions or prototype chain will be included.
   *
   * The main process should listen for `channel` with `ipcMain.handle()`.
   *
   */
  invoke(channel: string, ...args: any[]): Promise<any>;
  /**
   * Listens to `channel`, when a new message arrives `listener` would be called with
   * `listener(event, args...)`.
   */
  on(
    channel: string,
    listener: (event: IpcRendererEvent, ...args: any[]) => void
  ): this;
  /**
   * Adds a one time `listener` function for the event. This `listener` is invoked
   * only the next time a message is sent to `channel`, after which it is removed.
   */
  once(
    channel: string,
    listener: (event: IpcRendererEvent, ...args: any[]) => void
  ): this;
  /**
   * Removes all listeners, or those of the specified `channel`.
   */
  removeAllListeners(channel: string): this;
  /**
   * Removes the specified `listener` from the listener array for the specified
   * `channel`.
   */
  removeListener(channel: string, listener: (...args: any[]) => void): this;
  /**
   * Send a message to the main process asynchronously via `channel`, you can also
   * send arbitrary arguments. Arguments will be serialized as JSON internally and
   * hence no functions or prototype chain will be included.
   *
   * The main process handles it by listening for `channel` with the `ipcMain`
   * module.
   */
  send(channel: string, ...args: any[]): void;
  /**
   * The value sent back by the `ipcMain` handler.
   *
   * Send a message to the main process synchronously via `channel`, you can also
   * send arbitrary arguments. Arguments will be serialized in JSON internally and
   * hence no functions or prototype chain will be included.
   *
   * The main process handles it by listening for `channel` with `ipcMain` module,
   * and replies by setting `event.returnValue`.
   *
   * **Note:** Sending a synchronous message will block the whole renderer process,
   * unless you know what you are doing you should never use it.
   */
  sendSync(channel: string, ...args: any[]): any;
  /**
   * Sends a message to a window with `webContentsId` via `channel`.
   */
  sendTo(webContentsId: number, channel: string, ...args: any[]): void;
  /**
   * Like `ipcRenderer.send` but the event will be sent to the `<webview>` element in
   * the host page instead of the main process.
   */
  sendToHost(channel: string, ...args: any[]): void;
}
