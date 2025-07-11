---
id: tables
title: Example DB
sidebar_position: 3
---

For the examples used in the library's documentation, let's consider the following databases and tables:

# Database **users**

### Table Users

| id  | name        | email                     | age |
| --- | ----------- | ------------------------- | --- |
| 1   | Yuri Chaves | yuri.chaves39@hotmail.com | 29  |
| 2   | John Doe    | john.doe@gmail.com        | 30  |
| 3   | Jane Doe    | jane.doe@gmail.com        | 31  |

```ts title="types.ts"
export type TUsers = {
  id: number;
  name: string;
  email: string;
  age: number;
};
```

### Table Addresses

| id  | user_id | street       | number | city           | state | zip      |
| --- | ------- | ------------ | ------ | -------------- | ----- | -------- |
| 1   | 1       | Av. Paulista | 123    | São Paulo      | SP    | 01234567 |
| 2   | 2       | Av. Brasil   | 456    | Rio de Janeiro | RJ    | 02468123 |
| 3   | 3       | Av. Brasil   | 789    | São Paulo      | SP    | 03219876 |

```ts title="types.ts"
type TAddresses = {
  id: number;
  user_id: number;
  street: string;
  number: number;
  city: string;
  state: string;
  zip: string;
};
```
