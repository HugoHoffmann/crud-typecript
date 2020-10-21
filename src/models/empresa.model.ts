import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
  DataType,
  AutoIncrement,
  PrimaryKey,
} from "sequelize-typescript";
import { EmpresaFuncionario } from "./empresaFuncionario.model";
import { Funcionario } from "./funcionario.model";

@Table
export class Empresa extends Model<Empresa> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  cnpj!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  endereco: string;

  @BelongsToMany(() => Funcionario, () => EmpresaFuncionario)
  funcionarios: Array<Funcionario & { EmpresaFuncionario: EmpresaFuncionario }>;
}
