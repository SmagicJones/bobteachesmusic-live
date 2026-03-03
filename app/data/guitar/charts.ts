export interface GuitarChart {
  artist: string;
  title: string;
  intro: string;
  comment: string;
  download_url: string;
}

export const guitarCharts: GuitarChart[] = [
  {
    artist: "Me Mate",
    title: "Melody Idea",
    intro: "something to try - what other chords could I use?",
    comment:
      "Just a little Idea that I've had might be fun for someone else to play with too? I've mostly been making Bass charts recently - please do send me a message and tell me what guitar charts you want doing...",
    download_url: "/downloads/bass/brown-paper-bag-bass.pdf",
  },
];
