---
sidebar_position: 1
id: dns
---

# Client DNS

Crie um objeto de configuração para o cliente DNS

```ts title="odbc.ts"
import type { IODBCDNSConfig } from "node-pyodbc";

const config: IODBCDNSConfig = {
  dns: "DNS=MEUDNS",
  user: "EU",
  password: "minha$3nh4",
};
```

Crie uma instância do client

```ts title="odbc.ts"
import { ODBCClient } from "node-pyodbc";

const odbc = new ODBCClient(config);
```
