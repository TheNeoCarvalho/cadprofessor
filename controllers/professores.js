const professores = require("../models/professores");

const index = async (connection, req, res) => {
  let result;
  try {
    /*Tratando o erro com Try...Catch*/
    result = await professores.findAll(connection);
  } catch (error) {
    result = [];
  }
  res.render("professores/index", { professores: result });
};

const excluir = async (connection, req, res) => {
  await professores.excluir(connection, req.params.id);
  res.redirect("/professores");
};

const viewCreateForms = (req, res) => {
  res.render("professores/create"); //Mostrar o formulário criado
};

const processFormCreate = async (connection, req, res) => {
  //O dados digitados devem ser salvos no banco
  await professores.insertForm(connection, req.body);
  res.redirect("/professores");
};

/*Método para editar um registro */
const viewEditForms = async (connection, req, res, next) => {
  const professor = await professores.findOne(connection, req.params.id);
  res.render("professores/update", { professor });
  next();
};

const processFormEdit = async (connection, req, res) => {
  await professores.updateForm(connection, req.params.id, req.body); //O dados digitados devem ser salvos no banco
  res.redirect("/professores");
};

module.exports = {
  index,
  excluir,
  viewCreateForms,
  processFormCreate,
  viewEditForms,
  processFormEdit
};
