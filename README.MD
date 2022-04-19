# NOT TO DO API

this API is created for not to do application .

Here is the linked to frontend app.....

## APIS

All the api will be following the `{rootUrl}/api/v1/` format.

### Task API

`../api/v1/task` resource will provide all task related api .

| #   | Method   | Path    | Description                                                    |
| --- | -------- | ------- | -------------------------------------------------------------- |
| 1.  | `GET`    | `/task` | this will return all the task available in the database        |
| 2.  | `POST`   | `/task` | send task object api and to store in the database              |
| 3.  | `DELETE` | `/task` | It expects ID of the task and will delete a task from database |

### User API

`../api/v1/user` resource will provide all user related api .

| #   | Method   | Path    | Description                                                              |
| --- | -------- | ------- | ------------------------------------------------------------------------ |
| 1.  | `GET`    | `/user` | this will return either single or all the task available in the database |
| 2.  | `POST`   | `/user` | send user object api and to store in the database                        |
| 3.  | `DELETE` | `/user` | It expects ID of the user and will delete a task from database           |
| 4.  | `PATCH`  | `/user` | It expects ID of the user a                                              |
