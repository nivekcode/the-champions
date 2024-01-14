export interface Player {
  name: string;
  image: string;
}

export interface Team {
  id: number,
  name: string,
  logo: string,
  players: Player[]
}
