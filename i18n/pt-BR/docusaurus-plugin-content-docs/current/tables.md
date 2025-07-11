---
id: tables
title: DB Exemplo
sidebar_position: 3
---

Para os exemplos utilizados na documentação da biblioteca, vamos considerar o seguinte banco de dados e as tabelas:

# Banco de dados **usuarios**

### Tabela Usuarios

| id  | nome        | email                     | idade |
| --- | ----------- | ------------------------- | ----- |
| 1   | Yuri Chaves | yuri.chaves39@hotmail.com | 29    |
| 2   | John Doe    | john.doe@gmail.com        | 30    |
| 3   | Jane Doe    | jane.doe@gmail.com        | 31    |

```ts title="types.ts"
export type TUsuarios = {
  id: number;
  nome: string;
  email: string;
  idade: number;
};
```

### Tabela Endereços

| id  | id_usuario | rua          | numero | cidade         | estado | cep      |
| --- | ---------- | ------------ | ------ | -------------- | ------ | -------- |
| 1   | 1          | Av. Paulista | 123    | São Paulo      | SP     | 01234567 |
| 2   | 2          | Av. Brasil   | 456    | Rio de Janeiro | RJ     | 02468123 |
| 3   | 3          | Av. Brasil   | 789    | São Paulo      | SP     | 03219876 |

```ts title="types.ts"
type TEnderecos = {
  id: number;
  id_usuario: number;
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
};
```
