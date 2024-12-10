import { games } from "./store";

import { logger } from "./logger";
logger();

setInterval(() => {
  games.addGame({
    id: Math.random().toString(),
    whitePlayer: "alice",
    blackPlayler: "bob",
    moves: [],
  });
}, 5000);
