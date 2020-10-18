import { Application } from "express";

export class EmpresaRoutes {
  public routes(app: Application): void {
    app
      .route("/empresa")
      .get((req, res) => {
        res.status(200).send({
          getAll: true,
        });
      })
      .post((req, res) => {
        res.status(200).send({
          post: true,
        });
      });

    app
      .route("empresa/:id")
      .get((req, res) => {
        res.status(200).send({
          getAll: true,
        });
      })
      .delete((req, res) => {
        res.status(200).send({
          delete: true,
        });
      })
      .put((req, res) => {
        res.status(200).send({
          put: true,
        });
      });
  }
}
