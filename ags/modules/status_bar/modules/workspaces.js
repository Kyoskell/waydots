const Sway = await Service.import('sway');

function range(n = 9) {
    return Array.from({ length: n }, (_, i) => i + 1);
}

export const SwayWidget = Widget.Box({
  class_name: 'workspaces',
  spacing: 20,
  children: range(9).map( (i) =>
    Widget.Icon({
      setup: self => {
        self.hook(Sway.active.workspace, (self) => {
          self.toggleClassName("focused", Sway.active.workspace.name == i);
        })
      },
      class_name: "workspace-icon",
      icon: "media-record-symbolic",
    }),
  )
})

