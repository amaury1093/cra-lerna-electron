/* global __static */

const appIsPackaged = !process.defaultApp;

/**
 * Get the path to the `static` folder.
 *
 * @see https://github.com/electron-userland/electron-webpack/issues/52
 */
const staticPath = appIsPackaged
  ? __dirname.replace(/app\.asar$/, 'static')
  : __static;

export default staticPath;
