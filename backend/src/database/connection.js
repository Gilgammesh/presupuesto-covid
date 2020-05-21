// Importar las librerias
import mongoose from "mongoose";

// Creamos la conexión a la base de datos
const connection = async () => {
  // Variables de la base de datos
  const host = process.env.APP_DB_HOST;
  const port = 27017;
  const driver = process.env.APP_DB_DRIV;
  const db = process.env.APP_DB_NAME
  const opt = "retryWrites=true&w=majority";
  const user = process.env.APP_DB_USER;
  const pass = process.env.APP_DB_PWD;
  const uri = `${driver}://${host}:${port}/${db}?${opt}`;

  // Opciones de conexion
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    user: user,
    pass: pass,
  };

  // Intentar la conexion a la base de datos
  try {
    await mongoose.connect(uri, options);
    console.log("Conectado exitosamente a Mongo".green);
  } catch (error) {
    console.error(error);
  }
};

// Exportamos la funcion de conexión a la base de datos
export default connection;

