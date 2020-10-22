import { EmpresaDto } from "dto/empresa.dto";
import { Request, Response } from "express"
import { EmpresaService } from "../services/empresa.service"

export class EmpresaController{

  public empresaService: EmpresaService

  constructor(){
    this.empresaService = new EmpresaService()
  }

  public async add(req: Request, res: Response) {
    try {
      res
        .status(201)
        .json(await this.empresaService.create(req.body as EmpresaDto));
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  public async getEmpresas(req: Request, res: Response) {
    res.json(await this.empresaService.getAll());
  }

  public async getEmpresa(req: Request, res: Response) {
    try {
      res.json(await this.empresaService.getEmpresa(+req.params.id));
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      res.json(
        await this.empresaService.update({
          ...(req.body as EmpresaDto),
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
      res.json(await this.empresaService.delete(+req.params.id));
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }

}