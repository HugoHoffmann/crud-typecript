<h1 align="center">CRUD typescript + postgres 📝</h1>

## Install

```sh
 yarn install 
```

## Configuração

Crie um .env de acordo com o .env.example com as configurações do banco de dados em sua máquina


## Start

```sh
yarn prod 
```

## Rotas

## Funcionário

### GET `/funcionario`
Retorna todos os funcionários, conforme exemplo:
```json
[
  {
    "id": "1",
    "nome": "Luiz",
    "email": "luiz@gmail.com",
    "cpf": "890.186.250-60",
    "endereco": "Rio do Sul - SC",
    "createdAt": "2020-10-23 23:49:03",
    "updatedAt": "2020-10-23 23:49:03"
  },
  {
    "id": "2",
    "nome": "Bruno",
    "email": "bruno@gmail.com",
    "cpf": "800.778.540-04",
    "endereco": "Florianópolis - SC",
    "createdAt": "2020-10-23 23:49:03",
    "updatedAt": "2020-10-23 23:49:03"
  },
]
```

### GET `/funcionario/:id`
Retorna os dados de um funcionário junto com uma lista das empresas que ele pertence, conforme exemplo:
```json

{
  "id": "1",
  "nome": "Luiz",
  "email": "luiz@gmail.com",
  "cpf": "890.186.250-60",
  "endereco": "Rio do Sul - SC",
  "createdAt": "2020-10-23 23:49:03",
  "updatedAt": "2020-10-23 23:49:03",
  "empresas": [
    1
  ]
}
```

### POST `/funcionario`
Cria um novo funcionário.

Necessário enviar um JSON conforme exemplo:
```json
{
   "nome": "Tiago",
   "cpf": "800.778.540-04",
   "email": "tiago@hotmail.com",
   "endereco": "Palhoça - SC"
}
```

### PUT `/funcionario/:id`
Altera um funcionário existente.
Necessário enviar um JSON conforme exemplo:
```json
{
  "nome": "Pedro"
}
```

### DELETE `/funcionario/:id`
Deleta um funcionário existente

---

## Empresa

### GET `/empresa`
Retorna todas as empresas, conforme exemplo:
```json
[
  {
    "id": "1",
    "cnpj": "70.184.801/0001-30",
    "endereco": "Rio do Sul - SC",
    "createdAt": "2020-10-23 23:49:03",
    "updatedAt": "2020-10-23 23:49:03"
  },
  {
    "id": "2",
    "cnpj": "99.078.786/0001-27",
    "endereco": "Florianópolis - SC",
    "createdAt": "2020-10-23 23:49:03",
    "updatedAt": "2020-10-23 23:49:03"
  },
]
```

### GET `/empresa/:id`
Retorna os dados de uma empresa junto com uma lista de funcionários que ela possui, conforme exemplo:
```json

{
  "id": "1",
  "cnpj": "70.184.801/0001-30",
  "endereco": "Rio do Sul - SC",
  "funcionarios": [
    1
  ]
}
```

### POST `/empresa`
Cria uma nova empresa.

Necessário enviar um JSON conforme exemplo:
```json
{
  "cnpj": "39.606.617/0001-90",
  "endereco": "Palhoça - SC",
}
```

### PUT `/empresa/:id`
Altera uma empresa existente.
Necessário enviar um JSON conforme exemplo:
```json
{
  "cnpj": "92.720.496/0001-96",
}
```

### DELETE `/empresa/:id`
Deleta uma empresa existente

---


## Empresa Funcionario

### POST `/empresa-funcionario`
Cria uma nova relação entre empresa e funcionário.

Necessário enviar um JSON conforme exemplo:
```json
{
  "empresaId": "1",
  "funcionarioId": "2"
}
```


### DELETE `/empresa-funcionario/empresa/:empresaId/funcionario/:funcionarioId`
Deleta uma relação existente

---

***
