import express from "express";
import cors from "cors";
import routes from "./routes.js";

const server = express();      //instância da api

server.use(express.json());    //escolhendo o formato .json
server.use(cors());              //instância do cors
server.use(routes);            //depois de importar, instanciar

server.listen(3001, function(){         //listen: recebe a porta
    console.log("Servidor na porta 3001");
})