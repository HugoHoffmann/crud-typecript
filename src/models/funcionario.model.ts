import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
  DeletedAt,
} from "sequelize-typescript";
import { EmpresaFuncionario } from "./empresaFuncionario.model";
import { Empresa } from "./empresa.model";

@Table({
  tableName: "funcionario",
})
export class Funcionario extends Model<Funcionario> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  nome!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  cpf!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  endereco!: string;

  @DeletedAt
  deletedAt: Date;

  @BelongsToMany(() => Empresa, () => EmpresaFuncionario)
  empresas: Array<Empresa & { EmpresaFuncionario: EmpresaFuncionario }>;
}
