const { app, BrowserWindow, ipcMain, ipcRenderer, Tray, Menu, Notification } = require('electron');
const path = require('path');
const url = require('url');
function createWindow() {

    const isDev = 1

    const startUrl = 'http://127.0.0.1:3000' || url.format({
        pathname: path.join("build",'index.html'),
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
        win.webContents.openDevTools();

    win.loadURL(startUrl);
    win.on('minimize',function(event){
        event.preventDefault();
        win.hide();
    });
    
    win.on('close', function (event) {
        if(!app.isQuiting){
            event.preventDefault();
            win.hide();
        }
        return false;
    });
    return win
}   

app.whenReady().then(() => {
    const window = createWindow()
    
    ipcMain.handle("darkenTitleBar", () => {darkenTitleBar(window)})
    ipcMain.handle("lightenTitleBar", () => {lightenTitleBar(window)})
    ipcMain.handle("setReminder", async (milliseconds, title, body) => {await showNotification(milliseconds, title, body)})
    
    createTray(window)
    
    console.log(path.join("build",'index.html'))

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


// HELPERS
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

const showNotification = (milliseconds, title, body) => {
    const notif = new Notification({title: title, body:body});
    setTimeout(() => {notif.show()}, 4000)
} 

let tray = null
const createTray = (window) => {
    tray = new Tray(path.join(__dirname, 'favicon.ico'))
    
    tray.setToolTip('Avoca.do')
    
    tray.setContextMenu(Menu.buildFromTemplate([
        {
            label: "Quit",
            click: () => {
                app.isQuiting = true;
                app.quit();
            }
        }
    ]))

    tray.on('click', () => {
        window.show()
    })
}