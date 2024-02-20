import { create } from "zustand";
import { Question } from "../types";

interface GameState {
  questions: Question[];
  score: number;
  increaseScore: (newScore: number) => void;
  resetScore: () => void;
}

const questions: Question[] = [
  {
    text: "¿Cuál de las siguientes opciones no es una casa de Hogwarts?",
    answers: ["Dumbledore", "Slytherin", "Hufflepuff"],
    correct: 0,
  },
  {
    text: "¿Quién es Dumbledore?",
    answers: ["El padre de Harry", "Una fuerza malvada", "El director"],
    correct: 2,
  },
  {
    text: "¿Sabes qué personaje se supone que debía morir en la saga pero no murió?",
    answers: ["Hermione", "Arthur Weasly", "Harry"],
    correct: 1,
  },
  {
    text: "¿Quién es el mejor fabricante de varitas en el mundo mágico?",
    answers: ["Ollivanders", "Jimmy Kiddell", "Johannes Jonker"],
    correct: 0,
  },
  {
    text: "Quien es el padre de Harry?",
    answers: ["James Sirius Potter", "Albus Severus Potter", "James Potter"],
    correct: 2,
  },
  {
    text: "¿Quién es el profesor de pociones en Hogwarts?",
    answers: ["Severus Snape", "Dumbledore", "Poppy Pomfrey"],
    correct: 0,
  },
  {
    text: "¿Quién es Voldemort?",
    answers: [
      "El enemigo de Harry",
      "El mejor amigo de Ron",
      "Un profesor de Hogwarts",
    ],
    correct: 0,
  },
  {
    text: "¿Cuántos años tenía Harry cuándo descubrió que era un mago?",
    answers: ["5", "11", "20"],
    correct: 1,
  },
  {
    text: "¿Harry es amigo de cuál de los siguientes personajes?",
    answers: ["Lord Voldemort", "Hermione", "John Dawlish"],
    correct: 1,
  },
  {
    text: "¿Qué era el ejército de Dumbledore?",
    answers: [
      "Una organizacion",
      "Un libro",
      "Sirvientes controlados por Dumbledore",
    ],
    correct: 0,
  },
  {
    text: "¿Qué es la varita de saúco?",
    answers: [
      "La varita de Hermonie",
      "Una varita prohibida",
      "La varita mas poderosa del mundo",
    ],
    correct: 2,
  },
  {
    text: "¿Quién transforma a Remus en hombre lobo?",
    answers: ["Greyback", "Harry", "Voldemort"],
    correct: 0,
  },
  {
    text: "¿Con qué personaje comparte cumpleaños la autora J. K. Rowling?",
    answers: ["Ron", "Harry", "Hermione"],
    correct: 1,
  },
  {
    text: "¿Cuál fue el primer libro de la saga de Harry Potter?",
    answers: [
      "Harry potter y el caliz de fuego",
      "Harry Potter y la piedra filosofal",
      "Harry Potter y la cámara de los secretos",
    ],
    correct: 1,
  },
  {
    text: "¿Qué juego se practica durante toda la saga?",
    answers: ["Quidditch", "Tenis", "Hockey"],
    correct: 0,
  },
  {
    text: "¿Qué libro es el último de la saga?",
    answers: [
      "Harry Potter y el prisionero de Azkaban",
      "Harry Potter y las reliquias de la muerte",
      "Harry Potter y la orden del fénix",
    ],
    correct: 1,
  },
  {
    text: "¿Quién era Myrtle la llorona?",
    answers: [
      "Una fantasma",
      "La cómplice de Voldemort",
      "La mejor amiga de Harry",
    ],
    correct: 0,
  },
  {
    text: "¿Qué hacía el pensadero?",
    answers: [
      "Aumentaba los ataques de los magos",
      "Le daba a Voldemort más poder",
      "Le permitía a Harry ver las memorias de los demás",
    ],
    correct: 2,
  },
  {
    text: "¿En que fecha especial nació Fred Weasley?",
    answers: ["Día de los inocentes", "Navidad", "Año nuevo"],
    correct: 0,
  },
  {
    text: "¿De qué esta hecha la varita de Tom Riddle?",
    answers: ["Ocre", "Tejo", "Maple"],
    correct: 1,
  },
];

export const useGameStore = create<GameState>((set) => ({
  questions: questions,
  score: 0,
  increaseScore: (newScore: number) =>
    set((state) => ({ score: state.score + newScore })),
  resetScore: () => set({ score: 0 }),
}));
