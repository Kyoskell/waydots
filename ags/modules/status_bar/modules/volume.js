const Audio = await Service.import('audio');

const VolumeLabel = Widget.Label({
  class_name: 'volume-label',
  setup: self => self.hook(Audio.speaker, self => {
    const volume = Audio.speaker.volume * 100;
    self.label = `${Math.floor(volume)}%`;
  })
})

const VolumeIcon = Widget.Icon().hook(Audio.speaker, self => {
    const vol = Audio.speaker.volume * 100;
    const icon = [
      [101, 'overamplified'],
      [67, 'high'],
      [34, 'medium'],
      [1, 'low'],
      [0, 'muted'],
    ].find(([threshould]) => threshould <= vol)?.[1];

    self.icon = `audio-volume-${icon}-symbolic`;
    self.class_name = 'volume-icon';
})

export const VolumeWidget = Widget.Box({
    class_name: 'volume',
    spacing: 2,
    children: [
      VolumeIcon,
      VolumeLabel
    ]
})
