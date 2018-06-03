import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // By default opens file:///path/to/crale-react/build/index.html, unless
  // there's a ENV variable set, which we will use for development.
  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(
          __dirname,
          '..',
          '..',
          '..',
          'crale-react',
          'build',
          'index.html'
        ),
        protocol: 'file:',
        slashes: true
      })
  );
};

app.on('ready', createWindow);
