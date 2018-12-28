const express = require("express"); //Importanto o modulo express
const professoresController = require("../controllers/professores");
//Exportando a função que retorna um roteador
const professoresRouter = ({ connection }) => {
  const router = express.Router();
  //Mapeando o path
  router.get("/", professoresController.index.bind(null, connection));
  //Excluir professor
  router.get(
    "/excluir/:id",
    professoresController.excluir.bind(null, connection)
  );
  router.get("/create", professoresController.viewCreateForms);
  router.post(
    "/create",
    professoresController.processFormCreate.bind(null, connection)
  );
  router.get(
    "/update/:id",
    professoresController.viewEditForms.bind(null, connection)
  );
  router.post(
    "/update/:id",
    professoresController.processFormEdit.bind(null, connection)
  );
  return router;
};

module.exports = professoresRouter;
