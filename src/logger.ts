import { games } from "./store";

export const logger = () => {
  setInterval(() => {
    games.logState();
  }, 5000);
};
