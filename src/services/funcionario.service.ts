import { Transaction } from "sequelize/types";
import { FuncionarioDto } from "../dto/funcionario.dto";
import { Funcionario } from "../models/funcionario.model";
import { Empresa } from "../models/empresa.model";
import { EmpresaFuncionario } from "../models/empresaFuncionario.model";

export class FuncionarioService {
  public funcionarioModel = Funcionario;
  public empresaModel = Empresa;
  public empresaFuncionarioModel = EmpresaFuncionario;

  public async create(
    dadosFuncionario: FuncionarioDto,
    transaction?: Transaction
  ): Promise<FuncionarioDto> {
    const funcionario = await this.funcionarioModel.create(dadosFuncionario, {
      transaction,
    });

    if (dadosFuncionario.empresaId) {
      const empresa = await this.empresaModel.findByPk(
        dadosFuncionario.empresaId
      );
      if (empresa) {
        await this.empresaFuncionarioModel.create(
          { empresaId: empresa.id, funcionarioId: funcionario.id },
          { transaction }
        );
      } else {
        throw new Error("Empresa informada não existe");
      }
    }

    return funcionario.get() as FuncionarioDto;
  }

  public async getAll(transaction?: Transaction): Promise<FuncionarioDto[]> {
    const funcionarios = await this.funcionarioModel.findAll({ transaction });
    return funcionarios?.map(
      (funcionario) => funcionario.get() as FuncionarioDto
    );
  }

  public async getFuncionario(
    id: number,
    transaction?: Transaction
  ): Promise<FuncionarioDto> {
    const funcionario = await this.funcionarioModel.findByPk(id, {
      transaction,
      include: [
        {
          attributes: ["id"],
          model: this.empresaModel,
          required: false,
        },
      ],
    });
    if (!funcionario) {
      throw new Error("Funcionário não encontrado");
    }

    return {
      ...(funcionario.get() as FuncionarioDto),
      empresas: funcionario?.empresas.map((empresa) => empresa.id),
    };
  }

  public async update(
    funcionario: Partial<FuncionarioDto> & { id: number },
    transaction?: Transaction
  ): Promise<boolean> {
    const { id } = funcionario;
    const result = await this.funcionarioModel.update(funcionario, {
      transaction,
      where: {
        id,
      },
    });

    return result[0] > 0;
  }

  public async delete(id: number, transaction?: Transaction): Promise<void> {

    await this.empresaFuncionarioModel.destroy({
      transaction,
      where: {
        funcionarioId: id,
      },
    });
    await this.funcionarioModel.destroy({
      transaction,
      where: {
        id,
      },
    });
  }
}
