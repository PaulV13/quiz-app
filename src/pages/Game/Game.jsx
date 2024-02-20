import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { useGameStore } from "../../store/store";

const questions = [
  {
    question: "¿Cuál de las siguientes opciones no es una casa de Hogwarts?",
    answers: ["Dumbledore", "Slytherin", "Hufflepuff"],
    correct: 0,
  },
  {
    question: "¿Quién es Dumbledore?",
    answers: ["El padre de Harry", "Una fuerza malvada", "El director"],
    correct: 2,
  },
  {
    question:
      "¿Sabes qué personaje se supone que debía morir en la saga pero no murió?",
    answers: ["Hermione", "Arthur Weasly", "Harry"],
    correct: 1,
  },
  {
    question: "¿Quién es el mejor fabricante de varitas en el mundo mágico?",
    answers: ["Ollivanders", "Jimmy Kiddell", "Johannes Jonker"],
    correct: 0,
  },
  {
    question: "Quien es el padre de Harry?",
    answers: ["James Sirius Potter", "Albus Severus Potter", "James Potter"],
    correct: 2,
  },
  {
    question: "¿Quién es el profesor de pociones en Hogwarts?",
    answers: ["Severus Snape", "Dumbledore", "Poppy Pomfrey"],
    correct: 0,
  },
  {
    question: "¿Quién es Voldemort?",
    answers: [
      "El enemigo de Harry",
      "El mejor amigo de Ron",
      "Un profesor de Hogwarts",
    ],
    correct: 0,
  },
  {
    question: "¿Cuántos años tenía Harry cuándo descubrió que era un mago?",
    answers: ["5", "11", "20"],
    correct: 1,
  },
  {
    question: "¿Harry es amigo de cuál de los siguientes personajes?",
    answers: ["Lord Voldemort", "Hermione", "John Dawlish"],
    correct: 1,
  },
  {
    question: "¿Qué era el ejército de Dumbledore?",
    answers: [
      "Una organizacion",
      "Un libro",
      "Sirvientes controlados por Dumbledore",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la varita de saúco?",
    answers: [
      "La varita de Hermonie",
      "Una varita prohibida",
      "La varita mas poderosa del mundo",
    ],
    correct: 2,
  },
  {
    question: "¿Quién transforma a Remus en hombre lobo?",
    answers: ["Greyback", "Harry", "Voldemort"],
    correct: 0,
  },
  {
    question: "¿Con qué personaje comparte cumpleaños la autora J. K. Rowling?",
    answers: ["Ron", "Harry", "Hermione"],
    correct: 1,
  },
  {
    question: "¿Cuál fue el primer libro de la saga de Harry Potter?",
    answers: [
      "Harry potter y el caliz de fuego",
      "Harry Potter y la piedra filosofal",
      "Harry Potter y la cámara de los secretos",
    ],
    correct: 1,
  },
  {
    question: "¿Qué juego se practica durante toda la saga?",
    answers: ["Quidditch", "Tenis", "Hockey"],
    correct: 0,
  },
  {
    question: "¿Qué libro es el último de la saga?",
    answers: [
      "Harry Potter y el prisionero de Azkaban",
      "Harry Potter y las reliquias de la muerte",
      "Harry Potter y la orden del fénix",
    ],
    correct: 1,
  },
  {
    question: "¿Quién era Myrtle la llorona?",
    answers: [
      "Una fantasma",
      "La cómplice de Voldemort",
      "La mejor amiga de Harry",
    ],
    correct: 0,
  },
  {
    question: "¿Qué hacía el pensadero?",
    answers: [
      "Aumentaba los ataques de los magos",
      "Le daba a Voldemort más poder",
      "Le permitía a Harry ver las memorias de los demás",
    ],
    correct: 2,
  },
  {
    question: "¿En que fecha especial nació Fred Weasley?",
    answers: ["Día de los inocentes", "Navidad", "Año nuevo"],
    correct: 0,
  },
  {
    question: "¿De qué esta hecha la varita de Tom Riddle?",
    answers: ["Ocre", "Tejo", "Maple"],
    correct: 1,
  },
];

const Game = () => {
  const score = useGameStore((state) => state.score);
  const increaseScore = useGameStore((state) => state.increaseScore);

  const [intervalId, setIntervalId] = useState(0);
  const [timeoutId, setTimeoutId] = useState(0);
  const [time, setTime] = useState(10);
  const [questionsRandoms, setQuestionRandoms] = useState([]);
  const [question, setQuestion] = useState(null);
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [userResponse, setUserResponse] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    var questionAleatorias = questions.sort(() => {
      return Math.random() - 0.5;
    });
    setQuestionRandoms(questionAleatorias);
    setQuestion(questionAleatorias[0]);
  }, []);

  useEffect(() => {
    if (time === 0) {
      result();
    }
  }, [time]);

  useEffect(() => {
    if (numberQuestion === 11) {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      navigate("/endgame");
    }
  }, [numberQuestion]);

  const result = () => {
    const timeoutId = setTimeout(() => {
      setUserResponse(null);
      setTime(10);
      setQuestion(questionsRandoms[numberQuestion]);
      setNumberQuestion((numberQuestion) => numberQuestion + 1);
    }, 1000);
    setTimeoutId(timeoutId);
  };

  const handleAnswer = (ans) => {
    setUserResponse(ans);
    if (ans === question.correct) {
      increaseScore(time);
    }
    result();
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        backgroundColor="#333"
        w="126px"
        h="126px"
        m={6}
        borderRadius="50%"
        border="4px solid"
        position="relative"
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="absolute"
          bottom="0px"
          backgroundColor={time > 4 ? "green" : "red"}
          w="120px"
          h={`${time * 12}px`}
          transition={`height 1s`}
        />
        <Text
          textAlign="center"
          w="30px"
          fontWeight="bold"
          fontSize="22px"
          color="#eee"
          zIndex="3"
        >
          {time}
        </Text>
      </Box>
      {question ? (
        <Text textAlign="center" color="#eee" fontSize="18px" m={4}>
          {question.question}
        </Text>
      ) : null}

      {question
        ? question.answers.map((ans, index) => {
            return (
              <Box
                width={400}
                p="10px"
                m="10px 0"
                background={
                  userResponse !== null && index === question.correct
                    ? "green"
                    : userResponse === index
                    ? "red"
                    : "#eee"
                }
                cursor="pointer"
                textAlign="center"
                borderRadius="4px"
                border="4px solid #555"
                key={index}
                onClick={() => handleAnswer(index)}
              >
                {ans}
              </Box>
            );
          })
        : null}

      <Text m={2} color="#eee" fontSize="18px" fontWeight="bold">
        Puntaje: {score}
      </Text>
      <Text m={2} color="#eee" fontSize="18px" fontWeight="bold">
        Preguntas: {numberQuestion}/10
      </Text>
    </Box>
  );
};

export default Game;
