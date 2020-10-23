import { Transaction } from "sequelize/types";
import { Funcionario } from "../models/funcionario.model";
import { Empresa } from "../models/empresa.model";
import { EmpresaFuncionario } from "../models/empresaFuncionario.model";
import { EmpresaDto } from "../dto/empresa.dto";
import { EmpresaFuncionarioDto } from "../dto/empresaFuncionario.dto";

export class EmpresaFuncionarioService {
  public funcionarioModel = Funcionario;
  public empresaModel = Empresa;
  public empresaFuncionarioModel = EmpresaFuncionario;

  public async create(
    dados: EmpresaFuncionarioDto,
    transaction?: Transaction
  ): Promise<EmpresaFuncionarioDto> {
    if (!dados?.empresaId && !dados.funcionarioId) {
      throw new Error("Informe um funcionário e uma empresa");
    }

    const funcionario = await this.funcionarioModel.findByPk(
      dados.funcionarioId
    );
    if (!funcionario) {
      throw new Error("Funcionário não existe");
    }

    const empresa = await this.empresaModel.findByPk(dados.empresaId);
    if (!empresa) {
      throw new Error("Empresa não existe");
    }

    const { empresaId, funcionarioId } = dados;
    const checkRelacao = await this.empresaFuncionarioModel.findOne({
      where: {
        empresaId,
        funcionarioId,
      },
    });

    if (checkRelacao) {
      throw new Error("Relação entre empresa e funcionário já existe!");
    }

    const response = await this.empresaFuncionarioModel.create(
      { empresaId, funcionarioId },
      { transaction }
    );

    return response.get() as EmpresaFuncionarioDto;
  }

  public async delete(
    dados: EmpresaFuncionarioDto,
    transaction?: Transaction
  ): Promise<void> {
    if (!dados?.empresaId && !dados.funcionarioId) {
      throw new Error("Informe um funcionário e uma empresa");
    }
    const { empresaId, funcionarioId } = dados;

    await this.empresaFuncionarioModel.destroy({
      transaction,
      where: {
        empresaId,
        funcionarioId,
      },
      force: true,
    });
  }
}
