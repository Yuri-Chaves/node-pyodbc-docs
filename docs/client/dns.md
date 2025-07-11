---
sidebar_position: 1
id: dns
---

# DNS Client

Create a **DNS** object config

```ts title="odbc.ts"
import type { IODBCDNSConfig } from "node-pyodbc";

const config: IODBCDNSConfig = {
  dns: "DNS=MYDNS",
  user: "ME",
  password: "somePa$$word",
};
```

create the client instance

```ts title="odbc.ts"
import { ODBCClient } from "node-pyodbc";

const odbc = new ODBCClient(config);
```
