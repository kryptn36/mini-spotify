import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import { app, BrowserWindow, protocol } from 'electron';
import MenuBuilder from './utils/MenuBuilder';

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebugMode = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';
if (isDebugMode) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return Promise.all(
    extensions.map((name) => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

protocol.registerSchemesAsPrivileged([{scheme: "mini-spotify"}]);

const createWindow = async () => {
  protocol.registerHttpProtocol("mini-spotify", (request) => {
    console.log(request);
  })

  if (isDebugMode) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 495,
    height: 240,
    // resizable: false,
    webPreferences:
      process.env.NODE_ENV === 'development' &&
      process.env.ERB_SECURE !== 'true'
        ? {
            nodeIntegration: true,
            plugins: true,
          }
        : {
            preload: path.join(__dirname, 'dist/renderer.prod.js'),
            plugins: true,
          },
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => mainWindow = null);

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});
