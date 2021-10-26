import { PrismaClient } from "@prisma/client";

const seedData = [
  { name: "Bass Stab", path: "/sounds/bass-stab.wav", key: "1" },
  { name: "Closed Hi Hat 1", path: "/sounds/closed-hi-hat-1.wav", key: "2" },
  { name: "Closed Hi Hat 2", path: "/sounds/closed-hi-hat-2.wav", key: "3" },
  { name: "Closed Hi Hat 3", path: "/sounds/closed-hi-hat-3.wav", key: "4" },
  { name: "Closed Hi Hat 4", path: "/sounds/closed-hi-hat-4.wav", key: "5" },
  { name: "Crash Snare", path: "/sounds/crash-snare.wav", key: "6" },
  { name: "Crash", path: "/sounds/crash.wav", key: "7" },
  { name: "Kick 1", path: "/sounds/kick-1.wav", key: "q" },
  { name: "Kick 2", path: "/sounds/kick-2.wav", key: "w" },
  { name: "Kick 3", path: "/sounds/kick-3.wav", key: "e" },
  { name: "Kick 4", path: "/sounds/kick-4.wav", key: "r" },
  { name: "Open Hi Hat", path: "/sounds/open-hi-hat.wav", key: "t" },
  {
    name: "Reverse Cl Hi Hat 2",
    path: "/sounds/reverse-cl-hi-hat-2.wav",
    key: "y",
  },
  { name: "Reverse Kick 4", path: "/sounds/reverse-kick-4.wav", key: "u" },
  { name: "Reverse Roll 4", path: "/sounds/reverse-roll-4.wav", key: "a" },
  { name: "Reverse Snare 3", path: "/sounds/reverse-snare-3.wav", key: "s" },
  { name: "Semi Kick 2 1", path: "/sounds/semi-kick-2-1.wav", key: "d" },
  { name: "Semi Kick 2 2", path: "/sounds/semi-kick-2-2.wav", key: "f" },
  { name: "Semi Snare 1", path: "/sounds/semi-snare-1.wav", key: "g" },
  { name: "Semi Snare 2", path: "/sounds/semi-snare-2.wav", key: "h" },
  { name: "Semi Snare 3", path: "/sounds/semi-snare-3.wav", key: "j" },
  { name: "Semi Snare 4", path: "/sounds/semi-snare-4.wav", key: "z" },
  { name: "Snare 1", path: "/sounds/snare-1.wav", key: "x" },
  { name: "Snare 2", path: "/sounds/snare-2.wav", key: "c" },
  { name: "Snare 3", path: "/sounds/snare-3.wav", key: "v" },
  { name: "Snare 4", path: "/sounds/snare-4.wav", key: "b" },
];

const prisma = new PrismaClient();
await prisma.sample
  .createMany({
    data: seedData,
  })
  .then(() => {
    console.log("data seeded");
  });
