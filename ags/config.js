import { StatusBar } from "./modules/status_bar/status_bar.js";
import { NotificationPopups } from "./modules/popup/notification.js";
import { Prompt } from "./modules/prompt/prompt.js";
Utils.monitorFile(
  `${App.configDir}/style/`,
  function() {
    const css = `${App.configDir}/style/style.css`;
    App.resetCss()
    App.applyCss(css)
  },
)
App.config({
    icons: `${App.configDir}/assets/`,
    style: `${App.configDir}/style/style.css`,
    windows: [StatusBar, NotificationPopups(), Prompt],
    gtkTheme: "Materia",
    iconTheme: "Adwaita",
})
