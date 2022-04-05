import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        questions: [
          {
            question: "Question 1",
            answer:
              "Immediately invoked function expression. Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.",
            username: "",
            questionsLists: [],
            id: "6227b67fc624c56733927e2c",
          },
          {
            question: "Question 2",
            answer:
              "CI / CD: Continuous Integration / Continous Deliver. se va volcando (integrando) constantemente en la rama máster. Despliegue continuo es una aproximación de ingeniería del software en que los equipos de desarrollo entregan funcionalidades de software de forma frecuente a través de la automatización de despliegues.​​​",
            username: "",
            questionsLists: [],
            id: "622f8747956720c61ed3ebe5",
          },
        ],
      })
    );
  }),

  rest.get(
    `${process.env.REACT_APP_API_URL}/6227b67fc624c56733927e2c`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          question: "Question 1",
          answer:
            "Immediately invoked function expression. Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.",
          username: "",
          questionsLists: [],
          id: "6227b67fc624c56733927e2c",
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/6227b67fc624c56733927e2f`,
    (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          error: true,
          message: "Question not found",
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/6227b67fc624c56733927e2c`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/6227b67fc624c56733927e2f`,
    (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          error: true,
          message: "Question not found",
        })
      );
    }
  ),

  rest.post(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        question: "Question 3",
        answer: "Answer 3",
        username: "",
        questionsLists: [],
        id: "231",
      })
    );
  }),

  rest.post(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        wrong: "Question 3",
      })
    );
  }),

  rest.put(
    `${process.env.REACT_APP_API_URL}/6227b67fc624c56733927e2c`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          question: "Question 3",
          answer: "Answer 3",
          username: "",
          questionsLists: [],
          id: "6227b67fc624c56733927e2c",
        })
      );
    }
  ),

  // ------------------------------------------------------------------------------------------------

  rest.get(`${process.env.REACT_APP_API_URL_LIST}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        questions: [
          {
            listName: "Nombre 1",
            listSubject: "Materia 1",
            username: "",
            questionsLists: [],
            id: "1111",
          },
          {
            listName: "Nombre 2",
            listSubject: "Materia 2",
            username: "",
            questionsLists: [],
            id: "2222",
          },
        ],
      })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL_LIST}/1111`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        listName: "Nombre 1",
        listSubject: "Materia 1",
        username: "",
        questionsLists: [],
        id: "1111",
      })
    );
  }),

  rest.get(`${process.env.REACT_APP_API_URL_LIST}/3333`, (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        error: true,
        message: "Questions List not found",
      })
    );
  }),

  rest.delete(`${process.env.REACT_APP_API_URL_LIST}/2222`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${process.env.REACT_APP_API_URL_LIST}/3333`, (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        error: true,
        message: "Questions List not found",
      })
    );
  }),

  rest.post(`${process.env.REACT_APP_API_URL_LIST}`, (req, res, ctx) => {
    if (req.body.wrong) {
      return res(
        ctx.status(500),
        ctx.json({
          wrong: "Name 3",
        })
      );
    } else {
      return res(
        ctx.status(201),
        ctx.json({
          listName: "Nombre 4",
          listSubject: "Materia 4",
          username: "",
          questionsLists: [],
          id: "4444",
        })
      );
    }
  }),

  rest.post(
    `${process.env.REACT_APP_API_URL_USER}/user/login`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicXdlciIsImlkIjoiNjIzODhjYTZlMzYzZTMyNTU3Y2U1NWE4IiwiaWF0IjoxNjQ4MDI2MDY5fQ.RGPLxPPUkgHoYo4x9SGrDnC8ejwo6lDIuYpEJGnDV0E",
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL_USER}/user/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          message: "User registered with username: qwer3",
        })
      );
    }
  ),
];
