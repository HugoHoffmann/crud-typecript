import { Application } from "express";

import { EmpresaController } from "../controllers/empresaController";

export class EmpresaRoutes {
  public empresaController: EmpresaController;

  constructor() {
    this.empresaController = new EmpresaController();
  }
  public routes(app: Application): void {
    app
      .route("/empresa")
      .get(this.empresaController.getEmpresas.bind(this.empresaController))
      .post(this.empresaController.add.bind(this.empresaController));

    app
      .route("/empresa/:id")
      .get(this.empresaController.getEmpresa.bind(this.empresaController))
      .delete(this.empresaController.delete.bind(this.empresaController))
      .put(this.empresaController.update.bind(this.empresaController));
  }
}
