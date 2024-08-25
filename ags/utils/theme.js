function matugenToStr (format = "${{key}}: {{value}};", json) {
  let result = "";

  for (let key in json) {
    let value = json[key];
    result += format.replace("{{key}}", key).replace("{{value}}", value) + "\n";
  }

  return result;
}

Utils.readFileAsync(App.configDir + "/formatted_matugen.json")
  .then((colors) => {
    const themeJson = JSON.parse(colors);
    const theme = themeJson["colors"]["dark"];
    Utils.writeFileSync(
      matugenToStr(theme),
      App.configDir + "/colors.scss"
    ).catch(err => print(err))
  })
  .catch(err => print(err))

