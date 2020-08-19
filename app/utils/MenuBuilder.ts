import { Menu, BrowserWindow } from 'electron';

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu(): Menu {
    const template = this.buildDefaultTemplate();
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    return menu;
  }

  buildDefaultTemplate() {
    const isDevEnvironment =
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true';

    const viewMenu = [];
    if (!isDevEnvironment) {
      viewMenu.push(
        {
          label: '&Reload',
          accelerator: 'Ctrl+R',
          click: () => this.mainWindow.webContents.reload(),
        },
        {
          label: 'Toggle &Developer Tools',
          accelerator: 'Alt+Ctrl+I',
          click: () => this.mainWindow.webContents.toggleDevTools(),
        }
      );
    }

    viewMenu.push({
      label: 'Toggle &Full Screen',
      accelerator: 'F11',
      click: () =>
        this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()),
    });

    const templateDefault = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click: () => {
              this.mainWindow.close();
            },
          },
        ],
      },
      {
        label: '&View',
        submenu: [...viewMenu],
      },
    ];

    return templateDefault;
  }
}
