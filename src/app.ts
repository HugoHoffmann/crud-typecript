import * as express from "express";
import * as bodyParser from "body-parser";
import { FuncionarioRoutes } from "./routes/funcionarioRoutes";
import { EmpresaRoutes } from "./routes/empresaRoutes";
import sequelize from "./config/database";

export class App {
  public app: express.Application;
  public routesFuncionario: FuncionarioRoutes
  public routesEmpresa: EmpresaRoutes

  constructor() {
    this.app = express();
    this.config();
    sequelize.authenticate()
    this.routesFuncionario = new FuncionarioRoutes();
    this.routesEmpresa = new EmpresaRoutes();
    this.routesFuncionario.routes(this.app);
    this.routesEmpresa.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
