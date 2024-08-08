export const Arch = Widget.Button({
  class_name: "arch-button",
  on_clicked: () => App.toggleWindow("prompt"),
  child: Widget.Icon({
    class_name: "arch-icon",
    icon: "arch-symbolic",
  })
})

export const Launcher = Widget.Button({
  class_name: "launcher-button",
  on_clicked: () => Utils.execAsync("ags -b launcher -t applauncher"),
  child: Widget.Icon({
    class_name: "launcher-icon",
    icon: "launcher-symbolic",
  })
})

