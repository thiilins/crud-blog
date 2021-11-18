const express = require("express");
const app = express();
const port = 3000;
const maintenance = false;
const path = require("path");
const session = require("express-session");
const logger = require("morgan");
// const cors = require("cors");
/**
 *
 *  Importando Rotas
 *
 */
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
const categoryRoutes = require("./routes/category");

/**
 *
 *  Middlewares
 *
 */
app.use(logger("dev"));
// app.use(cors);
app.use(
  session({
    secret: "CRUDBLOG-TD",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(express.static(path.resolve("src", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Manutenção
app.use((req, res, next) => {
  !maintenance ? next() : res.status(503).json({ error: "Maintenance Mode" });
});
// Instanciando Rotas
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/categories", categoryRoutes);

// erro 404
app.use((req, res, next) => {
  res.status(404).json({ error: "404 - Not Found!" });
});

//Definindo escuta de porta para iniciar o servidor
app.listen(port, () => {
  console.log(`O Servidor está rodando em http://localhost:${port}`);
});
