import { Request, Response } from "express";
import { EmpresaFuncionarioService } from "../services/empresaFuncionario.service";

export class EmpresaFuncionarioController {
  public empresaFuncionarioService: EmpresaFuncionarioService;

  constructor() {
    this.empresaFuncionarioService = new EmpresaFuncionarioService();
  }

  public async add(req: Request, res: Response) {
    try {
      res.status(201).json(
        await this.empresaFuncionarioService.create({
          funcionarioId: +req.body.funcionarioId,
          empresaId: +req.body.empresaId,
        })
      );
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      res.json(
        await this.empresaFuncionarioService.delete({
          funcionarioId: +req.params.funcionarioId,
          empresaId: +req.params.empresaId,
        })
      );
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }
}
