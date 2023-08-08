const { contextBridge } = require('electron')
const ipcRenderer = require('electron').ipcRenderer;

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    darkenTitleBar: () => ipcRenderer.invoke('darkenTitleBar'),
    lightenTitleBar: () => ipcRenderer.invoke('lightenTitleBar'),
    setReminder: (milliseconds, title, body) => ipcRenderer.invoke('setReminder',milliseconds, title, body)
  })