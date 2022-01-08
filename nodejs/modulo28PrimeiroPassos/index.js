const express = require("express");

const server = express();

server.use(express.json());

// query params = ?nome=Nodejs

// route params = /curso/2

// request body (corpo da requisicao) = {nome: "curso node", tipo: "back end"}

const cursos = ["Node js", "Java Script", "React Native"];

// middleware global
server.use((req, res, next) => {
  console.log(`url chamada: ${req.url}`);
  return next();
});

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "nome do curso obrigatorio" });
  }
  return next();
}

function checkIndexCurso(req, res, next) {
  const curso = cursos[req.params.index];
  if (!curso) {
    return res.status(400).json({ error: "curso não existe" });
  }

  req.curso = curso;

  return next();
}

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

// localhost:3000/curso
server.get("/cursos/:index", checkIndexCurso, (req, res) => {
//   const { index } = req.params;

  return res.json(req.curso);
});

server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);
  return res.json(cursos);
});

server.put("/cursos/:index", checkCurso, checkIndexCurso, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  cursos[index] = name;
  return res.json(cursos);
});

server.delete("/cursos/:index", checkIndexCurso, (req, res) => {
  const { index } = req.params;
  cursos.splice(index, 1);
  return res.json({ message: "Curso deletado com sucesso" });
});

// server.get("/curso/:id", (req, res) => {
//     // route params
//     // server.get("/curso/:id"
//     // const id = req.params.id;
//     // return res.json({curso: `Curso: ${id}`})

//     // query params
//     // const nome = req.query.nome;
//     // return res.json({curso: `Aprendendo ${nome}`})

//     // return res.json({curso: "Node js"})
// //    return res.send("Hello world")
// })

server.listen(3000);
