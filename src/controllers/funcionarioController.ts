import { Request, Response } from "express";
import { FuncionarioService } from "../services/funcionario.service";
import { FuncionarioDto } from "dto/funcionario.dto";

export class FuncionarioController {
  public readonly funcionarioService: FuncionarioService;

  constructor() {
    this.funcionarioService = new FuncionarioService();
  }

  public async add(req: Request, res: Response) {
    try {
      res
        .status(201)
        .json(await this.funcionarioService.create(req.body as FuncionarioDto));
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  public async getFuncionarios(req: Request, res: Response) {
    res.json(await this.funcionarioService.getAll());
  }

  public async getFuncionario(req: Request, res: Response) {
    try {
      res.json(await this.funcionarioService.getFuncionario(+req.params.id));
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      res.json(
        await this.funcionarioService.update({
          ...(req.body as FuncionarioDto),
          id: +req.params.id,
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
      res.json(await this.funcionarioService.delete(+req.params.id));
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }
}
