---
id: intro
title: Introdução
sidebar_position: 1
---

# O que é Node-pyODBC?

Node-pyODBC é um módulo do Node.js que permite a conexão com bancos de dados por meio do protocolo ODBC. Com esse módulo, é possível conectar-se a bancos como MySQL, PostgreSQL, SQL Server, Oracle, entre outros.

A biblioteca [node-odbc](https://github.com/IBM/node-odbc) apresentava alguns problemas relacionados à codificação e a caracteres especiais (como `ç`, `ã`, `é`, etc.), o que dificultava seu uso em determinados cenários. Dediquei bastante tempo tentando resolver essa questão, mas não encontrei uma solução que funcionasse para todos os casos. Por isso, decidi criar uma nova biblioteca que lidasse melhor com a codificação e os caracteres especiais.

Esta biblioteca resolve esse problema de forma transparente, aproveitando a robustez do pyodbc e a fluidez do Node.js moderno.

## Requisitos

- Binários unixODBC e bibliotecas de desenvolvimento para compilação de módulos
  - no **Ubuntu/Debian** `sudo apt-get install unixodbc unixodbc-dev`
  - no **RedHat/CentOS** `sudo yum install unixODBC unixODBC-devel`
  - no **OSX**
    - usando _macports.org_ `sudo port unixODBC`
    - usando _brew_ `brew install unixODBC`
  - no **FreeBSD** `from ports cd /usr/ports/databases/unixODBC; make install`
  - no **IBM i** `yum install unixODBC unixODBC-devel` (requires [yum](https://ibmi-oss-docs.readthedocs.io/en/latest/yum/README.html))
- Drivers ODBC para banco de dados de destino
- Configuração correta de odbc.ini e odbcinst.ini.
- [python 3.X.X](https://www.python.org/)
- [pyodbc](https://github.com/mkleehammer/pyodbc)
- Node.js >=18.20.4

## Instalação

A biblioteca está atualmente em desenvolvimento. Você pode instalar a versão experimental utilizando o seguinte comando:

```bash
npm install node-pyodbc@git+https://github.com/Yuri-Chaves/node-pyodbc/tree/main
```
