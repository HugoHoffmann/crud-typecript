import { Application } from "express";
import { FuncionarioController } from '../controllers/funcionarioController'

export class FuncionarioRoutes {

  public funcionarioController: FuncionarioController = new FuncionarioController()

  public routes(app: Application): void {
    app
      .route("/funcionario")
      .get(this.funcionarioController.getFuncionarios)
      .post(this.funcionarioController.addFuncionario);

    app
      .route("funcionario/:id")
      .get(this.funcionarioController.getFuncionario)
      .delete(this.funcionarioController.deleteFuncionario)
      .put(this.funcionarioController.updateFuncionario);
  }
}
