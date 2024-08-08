import { BatteryWidget } from "./modules/battery.js";
import { TimeWidget } from "./modules/date.js";
import { VolumeWidget } from "./modules/volume.js";
import { WifiWidget } from "./modules/wifi.js";
import { SwayWidget } from "./modules/workspaces.js";
import { Arch, Launcher } from "./modules/symbols.js";
const Right = Widget.Box({
  class_name: "right",
  hpack: "end",
  children: [
    VolumeWidget,
    Widget.Box({
      class_name: "combo",
      spacing: 5,
      children: [
        WifiWidget,
        BatteryWidget
      ]
    }),
    Arch
  ]
})

const Left = Widget.Box({
  class_name: "left-box",
  spacing: 10,
  children: [
    Launcher,
    SwayWidget
  ],
})

const Main = Widget.CenterBox({
  class_name: "main",
  startWidget: Left,
  centerWidget: TimeWidget,
  endWidget: Right,
})

export const StatusBar = Widget.Window({
  name: "StatusBar",
  anchor: ['left', 'bottom', 'right'],
  exclusivity: "exclusive",
  child: Main,
})
