const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
function createWindow() {

    const isDev = 1

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: '../avocadoui/public/index.html',
        protocol: 'file:',
        slashes: true,
    });
    const win = new BrowserWindow({
        width: 1100,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    // if(isDev === 1) {
    //     win.webContents.openDevTools();
    // }

    win.loadURL(startUrl);
    win.setMenu(null)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
}
app.whenReady().then(createWindow);
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