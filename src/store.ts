interface Game {
  id: string;
  whitePlayer: string;
  blackPlayler: string;
  moves: string[];
}

export class GameManager {
  private games: Game[] = [];

  private static instance: GameManager;
  static getInstance() {
    if (this.instance) return this.instance;
    return (this.instance = new GameManager());
  }
  private constructor() {
    this.games = [];
  }
  public addGame(game: Game) {
    this.games.push(game);
  }

  public getGame() {
    return this.games;
  }

  public addMove(gameId: string, move: string) {
    const game = this.games.find((game) => game.id === gameId);
    if (game) game.moves.push(move);
  }

  public logState() {
    console.log(this.games);
  }
}

export const games = GameManager.getInstance();
