const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
const path = require('path');
const url = require('url');
function createWindow() {

    const isDev = 1

    const startUrl = 'http://localhost:3000' || url.format({
        pathname: 'index.html',
        protocol: 'file:',
        slashes: true,
    });
    let win = new BrowserWindow({
        width: 1100,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js'),
          },
          titleBarStyle: 'hidden',
          titleBarOverlay: {
            color: '#f1f1f1',
            symbolColor: '#black',
            height: 30
          }
          
    });
    console.log(win)
    // if(isDev === 1) {
    //     win.webContents.openDevTools();
    // }

    win.loadURL(startUrl);
    return win
}       
    const darkenTitleBar = (window) => {
        window.setTitleBarOverlay(
            {color:'black', symbolColor:'white', height:30}
        )
    }

    const lightenTitleBar = (window) => {
        window.setTitleBarOverlay(
            {color:'#f1f1f1', symbolColor:'black', height:30}
        )
    }


    app.whenReady().then(() => {
        const window = createWindow()
        ipcMain.handle("darkenTitleBar", () => {darkenTitleBar(window)})
        ipcMain.handle("lightenTitleBar", () => {lightenTitleBar(window)})
    });
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    });