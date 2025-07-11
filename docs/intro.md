---
id: intro
title: Introduction
sidebar_position: 1
---

# What is Node-pyODBC?

Node-pyODBC is a Node.js module that allows you to connect to databases using the ODBC protocol. With this module, you can connect to databases such as MySQL, PostgreSQL, SQL Server, Oracle, and more.

The [node-odbc](https://github.com/IBM/node-odbc) library had some issues with encoding and special characters(such as `ç`, `ã`, `é`, etc.), which made it difficult to use in some cases. I spend a lot of time trying to solve this problem, but I couldn't find a solution that worked for everyone. So, I decided to create a new library that would handle encoding and special characters better.

This library solves this issue transparently, taking advantage of the robustness of [pyodbc](https://github.com/mkleehammer/pyodbc) and the fluidity of modern NodeJS.

## Requirements

- unixODBC binaries and development libraries for module compilation
  - on **Ubuntu/Debian** `sudo apt-get install unixodbc unixodbc-dev`
  - on **RedHat/CentOS** `sudo yum install unixODBC unixODBC-devel`
  - on **OSX**
    - using _macports.org_ `sudo port unixODBC`
    - using _brew_ `brew install unixODBC`
  - on **FreeBSD** `from ports cd /usr/ports/databases/unixODBC; make install`
  - on **IBM i** `yum install unixODBC unixODBC-devel` (requires [yum](https://ibmi-oss-docs.readthedocs.io/en/latest/yum/README.html))
- ODBC drivers for target database
- properly configured odbc.ini and odbcinst.ini.
- [python 3.X.X](https://www.python.org/)
- [pyodbc](https://github.com/mkleehammer/pyodbc)
- Node.js >=18.20.4

## Installation

The library is currently under development; you can install the experimental version using the following command.

```bash
npm install node-pyodbc@git+https://github.com/Yuri-Chaves/node-pyodbc/tree/main
```
