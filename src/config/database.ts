import { Empresa } from "../models/empresa.model";
import { EmpresaFuncionario } from "../models/empresaFuncionario.model";
import { Funcionario } from "../models/funcionario.model";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: 'crud',
  dialect: "postgres",
  username: 'postgres',
  password: 'postgres',
  logging: false
});

sequelize.addModels([Funcionario, Empresa, EmpresaFuncionario]);

sequelize.sync({
  force: true
})
export default sequelize
