import { FuncionarioDto } from "./funcionario.dto";

export class EmpresaDto {
  public id?: number;
  public cnpj: string;
  public endereco: string;
  public funcionarioId?: number;

  public funcionarios: FuncionarioDto[];
}
