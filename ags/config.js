import { StatusBar } from "./modules/status_bar/status_bar.js";
import { Prompt } from "./modules/prompt/prompt.js";
import { applyScss } from "./utils/theme.js";

Utils.monitorFile(
  `${App.configDir}` + "/style/",
  function() {
    applyScss()
  },
)

App.config({
    icons: `${App.configDir}/assets/`,
    style: `${App.configDir}/style.css`,
    windows: [StatusBar, Prompt],
    gtkTheme: "Materia",
    iconTheme: "Adwaita",
})
