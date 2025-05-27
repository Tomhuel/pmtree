# pmtree
pmtree it's a tool for displaying `postman's collections` in a tree format.

## Install

```bash
npm i -g pmtree
```

## Usage

```bash
pmtree collection_file.json
```

Output:

```
Collection's name
├─┬ Auth
│ ├── 🟡 POST register
│ ├── 🟡 POST logout
│ └── 🟡 POST login
└─┬ User
  ├── 🟢 GET Get User
  ├── 🟢 GET Get Users
  ├── 🟡 POST Create User
  ├── 🔵 UPDATE Update User
  └── 🔴 DELETE Delete User
```