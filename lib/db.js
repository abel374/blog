import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB conectado com sucesso");
    });

    connection.on("error", (err) => {
      console.log(
        "Erro de conexão do MongoDB. Por favor, certifique-se de que o MongoDB esteja em execução. " +
          err
      );
      // process.exit();
    });
  } catch (error) {
    console.log("Algo dá errado!");
    console.log(error);
  }
}
