// Importamos o Requerimos las librerias
import express, { json, urlencoded } from "express";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { textSync } from "figlet";
import os from "os";
import dotenv from "dotenv";
import "colors";
import dbconnection from "./database/connection";
import routes from "./routes/index";
import processData from "./helpers/processData";

// Habilitamos nuestras variables de entorno
dotenv.config();

// Inicializamos el servidor de express
const app = express();

// Middlewares
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use("*", cors());

// Rutas del servicio API
app.use(routes);

// Variables generales de la API
const port = 4000;
const appAutor = "GRSM";

// Nos conectamos a la base de datos
dbconnection();

// Procesamos e insertamos la data
processData();

// Creamos el servidor HTTP
const httpServer = createServer(app);

// Inicializamos o arrancamos el servidor
httpServer.listen(port, () => {
  console.log(textSync(appAutor).blue);
  console.log(
    "*******************************************************************************"
      .america
  );
  console.log(
    (os.type().toUpperCase() + " Servidor, listo en el puerto " + port).yellow
  );
  console.log(
    "*******************************************************************************"
      .america
  );
});
