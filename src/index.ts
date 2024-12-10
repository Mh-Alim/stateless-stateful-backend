import { games } from "./store";

import { logger } from "./logger";
logger();

setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayer: "alice",
    blackPlayler: "bob",
    moves: [],
  });
}, 5000);
