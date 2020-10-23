import { Application } from "express";

import { EmpresaFuncionarioController } from "../controllers/empresaFuncionarioController";

export class EmpresaFuncionarioRoutes {
  public empresaFuncionarioController: EmpresaFuncionarioController;

  constructor() {
    this.empresaFuncionarioController = new EmpresaFuncionarioController();
  }
  public routes(app: Application): void {
    app
      .route("/empresa-funcionario")
      .post(
        this.empresaFuncionarioController.add.bind(
          this.empresaFuncionarioController
        )
      );

    app
      .route(
        "/empresa-funcionario/empresa/:empresaId/funcionario/:funcionarioId"
      )
      .delete(
        this.empresaFuncionarioController.delete.bind(
          this.empresaFuncionarioController
        )
      );
  }
}
