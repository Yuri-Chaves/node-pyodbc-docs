---
sidebar_position: 2
id: explicit
---

# Client Explicito

Crie um objeto de configuração para o **cliente explicito**

```ts title="odbc.ts"
const config: IODBCNoDNSConfig = {
  driver: "DRIVER",
  server: "meuServidor",
  database: "usuarios", // Opcional
  user: "EU",
  password: "minha$3nh4",
};
```

Crie uma instância do client

```ts title="odbc.ts"
import { ODBCClient } from "node-pyodbc";

const odbc = new ODBCClient(config);
```
