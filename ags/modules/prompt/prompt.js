function Buttons (icon = "", label = "", command = "") {
  const pIcon = Widget.Icon({
    class_name: "p-icon",
    icon: icon,
  })
  
  const pLabel = Widget.Label({
    class_name: "p-label",
    label: label,
  })

  const Box = Widget.Box({
    class_name: "p-box",
    vertical: true,
    spacing: 20,
    children: [pIcon, pLabel],
  })
  
  return Widget.Button({
    class_name: "p-button",
    on_clicked: () => Utils.execAsync(command),
    child: Box,
  })
}

const ButtonList = [
  ["system-lock-screen-symbolic", "Screen lock", "gtklock"],
  ["system-log-out-symbolic", "Exit Sway", "sway exit"],
  ["system-shutdown-symbolic", "Shut down", "poweroff"],
  ["system-reboot-symbolic", "Reboot", "reboot"],
]

const btns = Widget.Box({
  class_name: "p-btns",
  hpack: "center",
  vpack: "center",
  children: ButtonList.map(params => {
    const [icon, label, command] = params;
    return Buttons(icon, label, command);
  })
})


export const Prompt = Widget.Window({
  name: "prompt",
  class_name: "prompt",
  visible: false,
  child: btns,
  keymode: "exclusive",
  setup: self => {
    self.keybind("Escape", () => 
      App.closeWindow("prompt"))
  }
})
