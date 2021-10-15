//  Importando e inicializando o módulo 'express'
const express = require("express");
const app = express();
const port = 3000;
const maintenance = false;
//Importando Módulos
const methodOverride = require("method-override");
const indexRoutes = require("./src/routes");
const adminRoutes = require("./src/routes/admin");
const userRoutes = require("./src/routes/user");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// Definindo View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(cookieParser());
app.use(logger("dev"));
// Express Session
app.use(
  session({
    secret: "DevHouseL3000TL",
    resave: true,
    saveUninitialized: true,
  })
);
// Middlewares
app.use(express.static(path.resolve("src", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); //*?_method=PUT

//Instanciando Rotas
app.use("/", indexRoutes);
app.use("/", userRoutes);
app.use("/admin", adminRoutes);

// Manutenção
app.use((req, res, next) => {
  !maintenance ? next() : res.status(503).render("pages/maintenance");
});
// erro 404
app.use((req, res, next) => {
  res.status(404).render("pages/404", { page: "404 - Página não encontrada" });
  next();
});
//Definindo escuta de porta para iniciar o servidor
app.listen(port, () => {
  console.log(`O Servidor está rodando em http://localhost:${port}`);
});
