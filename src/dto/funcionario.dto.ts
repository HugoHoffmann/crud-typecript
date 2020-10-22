import { EmpresaDto } from "./empresa.dto";

export class FuncionarioDto {
  public id?: number;
  public nome: string;
  public cpf: string;
  public email: string;
  public endereco: string;
  public empresaId?: number;

  public empresas: number[];
}
