const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

let mainWindow;

//어플리케이션 기동이 종료 후 동작한다.
app.on('ready', () => {
    createWindow();
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 800,
        useContentSize: true,
        title: '일렉트론연습'
    });

    mainWindow.loadFile('./build_contents/index.html');

    //윈도우 전부를 닫고, null로 지정한다.
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}