import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
  Model
} from "sequelize-typescript";
import { Empresa } from "./empresa.model";
import { Funcionario } from "./funcionario.model";

@Table
export class EmpresaFuncionario extends Model<EmpresaFuncionario> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Funcionario)
  @Column(DataType.INTEGER)
  funcionarioId: number;

  @ForeignKey(() => Empresa)
  @Column(DataType.INTEGER)
  empresaId: number;
}
