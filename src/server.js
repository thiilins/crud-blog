const express = require("express");
const app = express();
const port = 3000;
const maintenance = false;

const methodOverride = require("method-override");
const indexRoutes = require("./routes");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

const path = require("path");
const session = require("express-session");
const logger = require("morgan");
// const cors = require("cors");
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

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
app.use(methodOverride("_method")); //*?_method=PUT

app.use("/", indexRoutes);
app.use("/auth", userRoutes);
app.use("/admin", adminRoutes);

// // Manutenção
// app.use((req, res, next) => {
//   !maintenance ? next() : res.status(503).render("pages/maintenance");
// });
// erro 404
app.use((req, res, next) => {
  res.status(404).render("pages/404", { page: "404 - Página não encontrada" });
  next();
});
//Definindo escuta de porta para iniciar o servidor
app.listen(port, () => {
  console.log(`O Servidor está rodando em http://localhost:${port}`);
});
