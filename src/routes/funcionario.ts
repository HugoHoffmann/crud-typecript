import {Application} from 'express'

export class FuncionarioRoutes{
  public routes(app: Application): void{
    app.route('/funcionario')
    .get((req, res) => {
      res.status(200).send({
        messsage: 'teste' 
      })
    })
  }
}