 var app = require('app');
 var BrowserWindow = require('browser-window');
 require('crash-reporter').start();

 var mainWindow = null;

 app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
   app.quit();
 });

app.setPath("userData", __dirname + "/zFacebookUserProfile");

 app.on('ready', function() {
  mainWindow = new BrowserWindow({
   width: 700,
   height: 850,
   resizable: true,
   title: "zFacebook",
   icon: "/zFacebook.icns",
   icon: "/zFacebook.ico",
   icon: "/zFacebook.png"
  });
  mainWindow.setOverlayIcon(
   __dirname + "/zFacebook.png",
   "Test?");
  mainWindow.setTitle("zFacebook");
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();
  mainWindow.on('closed', function() {
   mainWindow = null;
  });
  //mainWindow.toggleDevTools();
 });
