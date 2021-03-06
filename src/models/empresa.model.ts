import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
  DataType,
  AutoIncrement,
  PrimaryKey,
  DeletedAt,
} from "sequelize-typescript";
import { EmpresaFuncionario } from "./empresaFuncionario.model";
import { Funcionario } from "./funcionario.model";

@Table({
  tableName: "empresa",
})
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

  @DeletedAt
  deletedAt: Date;

  @BelongsToMany(() => Funcionario, () => EmpresaFuncionario)
  funcionarios: Array<Funcionario & { EmpresaFuncionario: EmpresaFuncionario }>;
}
