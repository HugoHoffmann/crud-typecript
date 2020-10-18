import * as express from "express";
import * as bodyParser from "body-parser";
import { FuncionarioRoutes } from "./routes/funcionario";
import { EmpresaRoutes } from "./routes/empresa";

class App {
  public app: express.Application;
  public routesFuncionario: FuncionarioRoutes = new FuncionarioRoutes();
  public routesEmpresa: EmpresaRoutes = new EmpresaRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.routesFuncionario.routes(this.app);
    this.routesEmpresa.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
