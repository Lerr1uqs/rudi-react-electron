import { app, BrowserWindow } from 'electron';
// import { createStore} from "redux"

// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;



// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// import {render} from "./root"

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
//   console.log("before loadurl")
//   console.log(__dirname)// .webpack\main
//   mainWindow.loadFile(__dirname + "/../renderer/index.html");
  mainWindow.loadFile(MAIN_WINDOW_WEBPACK_ENTRY + "/index.html");
  console.log(MAIN_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};


app.on('ready', () => {
    console.log("ready")
    createWindow()// 必须在ready事件里面执行
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  console.log("activate")
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();

  }
});


// store.dispatch(() => {} as Action<Any>)

// ReactDOM.render(
//     <Nav />,
//     document.getElementById("app")// index.html
// )

