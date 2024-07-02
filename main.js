const { app, BrowserWindow, ipcMain } = require('electron/main');
const {screen} = require('electron');
const path = require('node:path');

function createWindow () {
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;
    const mainWindow = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // ipcMain.on('set-json', (event, title) => {
    //
    // })

    // mainWindow.webContents.openDevTools()
    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})