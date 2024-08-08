import { applauncher } from "./applauncher.js";


Utils.monitorFile(
  "../../style/applauncher.css",
  function() {
    const css = "../../style/applauncher.css";
    App.resetCss()
    App.applyCss(css)
  },
)

App.config({
  windows: [applauncher],
  iconTheme: "Papirus-Dark",
  gtkTheme: "Materia",
})

