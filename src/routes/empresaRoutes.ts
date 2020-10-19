import { Application } from "express";

import { EmpresaController } from "../controllers/empresaController";

export class EmpresaRoutes {
  public empresaController: EmpresaController = new EmpresaController();

  public routes(app: Application): void {
    app
      .route("/empresa")
      .get(this.empresaController.getEmpresas)
      .post(this.empresaController.addEmpresa);

    app
      .route("empresa/:id")
      .get(this.empresaController.getEmpresa)
      .delete(this.empresaController.deleteEmpresa)
      .put(this.empresaController.updateEmpresa);
  }
}
