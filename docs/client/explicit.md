---
sidebar_position: 2
id: explicit
---

# Explicit Client

Create a **Explicit** object config

```ts title="odbc.ts"
const config: IODBCNoDNSConfig = {
  driver: "DRIVER",
  server: "myServer",
  database: "users", // Optional
  user: "ME",
  password: "somePa$$word",
};
```

create the client instance

```ts title="odbc.ts"
import { ODBCClient } from "node-pyodbc";

const odbc = new ODBCClient(config);
```
