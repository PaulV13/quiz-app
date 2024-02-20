export interface Player {
  name: string;
  score: number;
}

export interface Question {
  text: string;
  answers: string[];
  correct: number;
}
