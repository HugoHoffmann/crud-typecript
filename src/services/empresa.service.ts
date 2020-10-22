import { Transaction } from "sequelize/types";
import { Funcionario } from "../models/funcionario.model";
import { Empresa } from "../models/empresa.model";
import { EmpresaFuncionario } from "../models/empresaFuncionario.model";
import { EmpresaDto } from "dto/empresa.dto";

export class EmpresaService {
  public funcionarioModel = Funcionario;
  public empresaModel = Empresa;
  public empresaFuncionarioModel = EmpresaFuncionario;

  public async create(
    dados: EmpresaDto,
    transaction?: Transaction
  ): Promise<EmpresaDto> {
    const empresa = await this.empresaModel.create(dados, {
      transaction,
    });

    if (dados.funcionarioId) {
      const funcionario = await this.funcionarioModel.findByPk(
        dados.funcionarioId
      );
      if (funcionario) {
        await this.empresaFuncionarioModel.create(
          { empresaId: empresa.id, funcionarioId: funcionario.id },
          { transaction }
        );
      } else {
        throw new Error("Funcionário informada não existe");
      }
    }

    return empresa.get() as EmpresaDto;
  }

  public async getAll(transaction?: Transaction): Promise<EmpresaDto[]> {
    const empresas = await this.empresaModel.findAll({ transaction });
    return empresas?.map((empresa) => empresa.get() as EmpresaDto);
  }

  public async getEmpresa(
    id: number,
    transaction?: Transaction
  ): Promise<EmpresaDto> {
    const empresa = await this.empresaModel.findByPk(id, {
      transaction,
      include: [
        {
          attributes: ["id"],
          model: this.funcionarioModel,
          required: false,
        },
      ],
    });
    if (!empresa) {
      throw new Error("Empresa não encontrada");
    }

    return {
      ...(empresa.get() as EmpresaDto),
      funcionarios: empresa?.funcionarios.map((funcionario) => funcionario.id),
    };
  }

  public async update(
    dados: Partial<EmpresaDto> & { id: number },
    transaction?: Transaction
  ): Promise<boolean> {
    // if(funcionario.empresaId){
    //   const empresa = await this.empresaModel.findByPk(
    //     funcionario.empresaId
    //   );
    //   if (empresa) {

    //   } else {
    //     throw new Error("Empresa informada não existe");
    //   }
    // }
    const { id } = dados;
    const result = await this.empresaModel.update(dados, {
      transaction,
      where: {
        id,
      },
    });

    return result[0] > 0;
  }

  public async delete(id: number, transaction?: Transaction): Promise<void> {
    await this.empresaModel.destroy({
      transaction,
      where: {
        id,
      },
    });
  }
}
