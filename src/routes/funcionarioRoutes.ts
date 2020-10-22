import { Application } from "express";
import { FuncionarioController } from "../controllers/funcionarioController";

export class FuncionarioRoutes {
  public funcionarioController: FuncionarioController;

  constructor() {
    this.funcionarioController = new FuncionarioController();
  }

  public routes(app: Application): void {
    app
      .route("/funcionario")
      .get(
        this.funcionarioController.getFuncionarios.bind(
          this.funcionarioController
        )
      )
      .post(this.funcionarioController.add.bind(this.funcionarioController));

    app
      .route("/funcionario/:id")
      .get(
        this.funcionarioController.getFuncionario.bind(
          this.funcionarioController
        )
      )
      .delete(
        this.funcionarioController.delete.bind(this.funcionarioController)
      )
      .put(this.funcionarioController.update.bind(this.funcionarioController));
  }
}
