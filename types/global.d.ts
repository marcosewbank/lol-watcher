export interface League {
  name: string;
  slug: string;
}

export interface Result {
  outcome?: any;
  gameWins: number;
}

export interface Record {
  wins: number;
  losses: number;
}

export interface Team {
  name: string;
  code: string;
  image: string;
  result: Result;
  record: Record;
}

export interface Strategy {
  type: string;
  count: number;
}

export interface Match {
  id: string;
  flags: any[];
  teams: Team[];
  state: string;
  strategy: Strategy;
  games: Match[];
}

export interface Event {
  startTime: Date;
  state: string;
  type: string;
  blockName: string;
  league: League;
  match: Match;
}

export interface EventList {
  completed: Event[];
  inProgress: Event[];
  unstarted: Event[];
}
