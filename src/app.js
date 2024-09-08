import express from 'express';
import connectNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors';


const conexao = await connectNaDatabase();

conexao.on("erro", (erro) => {
    console.error("erro de conexão", erro)
}); 

conexao.once("open", () => {
    console.log("Conexao com o banco de dados ok")
} )

const app = express();
app.use(cors());
routes(app);

export default app;
