const findAll = connection => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM professores", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const findById = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM professores WHERE id = " + id,
      (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          if (results.length > 0) {
            resolve(results[0]);
          } else {
            resolve({});
            console.log(id);
          }
        }
      }
    );
  });
};

const findOne = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM professores WHERE id = " + id,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      }
    );
  });
};

const excluir = (connection, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "delete FROM professores WHERE id = " + id + " LIMIT 1 ",
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const insertForm = (connection, dataProf) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO professores (Nome,cpf,graduacao) VALUES (
        '${dataProf.nome}',
        '${dataProf.cpf}',
        '${dataProf.graduacao}')`,
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const updateForm = (connection, id, dataProf) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE professores SET Nome='${dataProf.nome}',cpf='${
        dataProf.cpf
      }',graduacao='${dataProf.graduacao}' WHERE id = ${id}`,
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

module.exports = {
  findAll,
  findOne,
  excluir,
  insertForm,
  updateForm
};
