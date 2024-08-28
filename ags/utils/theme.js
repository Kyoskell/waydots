function matugenToStr (format = "${{key}}: {{value}};", json) {
  let result = "";

  for (let key in json) {
    let value = json[key];
    result += format.replace("{{key}}", key).replace("{{value}}", value) + "\n";
  }

  return result;
}

export function applyScss () {
  let scss = App.configDir + "/style/style.scss";
  let css = App.configDir + "/style.css";
  Utils.execAsync(`sass ${scss} ${css}`);
  App.resetCss();
  App.applyCss(css);
}

//Utils.readFileAsync(App.configDir + "/formatted_matugen.json")
//  .then((colors) => {
//    const themeJson = JSON.parse(colors);
//    const theme = themeJson["colors"]["dark"];
//    Utils.writeFileSync(
//      matugenToStr("${{key}}: {{value}};", theme),
//      App.configDir + "/colors.scss"
//    )
//  })
//  .catch(err => print(err))
