import { Empresa } from "../models/empresa.model";
import { EmpresaFuncionario } from "../models/empresaFuncionario.model";
import { Funcionario } from "../models/funcionario.model";
import { Sequelize } from "sequelize-typescript";
import {config} from 'dotenv'

config()
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false
});

sequelize.addModels([Funcionario, Empresa, EmpresaFuncionario]);

sequelize.sync({
  alter: true
})
export default sequelize
