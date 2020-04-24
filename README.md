# FancyTodo


**Base URL**

https://thawing-basin-47514.herokuapp.com

http://localhost:3000

# Todos

***Add***
----
  Returns new todo.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

   **Required:**
  ````
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date:req.body.due_date
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
    "todo": {
        "id": 1,
        "title": "test",
        "description": "testing todo",
        "status": false,
        "due_date": "2020-05-02T00:00:00.000Z",
        "updatedAt": "2020-03-30T06:02:31.794Z",
        "createdAt": "2020-03-30T06:02:31.794Z",
        "UserId": 1
      }
    }
    ```


* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "SequelizeValidationError" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: `https://thawing-basin-47514.herokuapp.com/todos`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: {
        title, description, status, due_date
      }
    })
  ```

----
***Display***
----
  Returns all todos.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
      {
        "id": 1,
        "title": "test",
        "description": "testing todo",
        "status": false,
        "due_date": "2020-05-20T00:00:00.000Z",
        "UserId": 1,
        "createdAt": "2020-03-30T05:56:08.893Z",
        "updatedAt": "2020-03-30T05:56:08.893Z"
      },
      {
        "id": 2,
        "title": "test",
        "description": "testing todo",
        "status": false,
        "due_date": "2020-04-30T17:00:00.000Z",
        "UserId": 1,
        "createdAt": "2020-03-30T06:13:15.897Z",
        "updatedAt": "2020-03-30T06:13:15.897Z"
      }
    ]
    ```
  ```
  
  ```

* **Error Response:**

  * **Code:** 500 <br />


* **Sample Call:**

  ```javascript
  $.ajax({
    method: 'GET',
    url: 'https://thawing-basin-47514.herokuapp.com/todos',
    headers: {
      token: localStorage.getItem('token')
    }
  })
  
  ```

----
***getById***
----
  Returns todos data by Id.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

* **Code:** 200 <br />
    **Content:** 
    ```
  {
    "id": 1,
    "title": "test",
    "description": "testing server",
    "status": false,
    "due_date": "2020-05-20T00:00:00.000Z",
    "UserId": null,
    "createdAt": "2020-03-30T05:56:08.893Z",
    "updatedAt": "2020-03-30T05:56:08.893Z"
  }
```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
    "message": "Todo not found",
    "errors": [
        "Todo not found"
      ]
    }`

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'GET',
      url: `https://thawing-basin-47514.  herokuapp.com/todos/${id}`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
  ```

----
***Update***
---
----
  Returns Updated todos.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**

   `id=[integer]`

* **Data Params**

  * **Required:**
  ````
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date:req.body.due_date
    }
  ````

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    "data": {
        "id": 8,
        "title": "test",
        "description": "testing update",
        "status": false,
        "due_date": "2020-05-09T00:00:00.000Z",
        "UserId": null,
        "createdAt": "2020-03-30T06:13:15.897Z",
        "updatedAt": "2020-03-30T06:56:15.735Z"
      }
    }
    ```

* **Error Response:**

  * **Code:** 500 <br />

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
    "message": "Todo not found",
    "errors": [
        "Todo not found"
      ]
    }`

  OR

  * **Code:** 400  <br />
    **Content:** `{ error : "SequelizeVlaidationError" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'PUT',
      url: `https://thawing-basin-47514.herokuapp.com/todos/${id}`,
      headers: {
        token: localStorage.getItem('token')
      },
      data: {
        title, description, status, due_date
      }
    })
  ```

----
***Delete***
----
  Returns deleted todo.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

  * **Required:**

   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
  **Content:** 
    ```
    {
      "id": 10,
      "title": "test",
      "description": "testing server",
      "status": false,
      "due_date": "2020-05-03T00:00:00.000Z",
      "UserId": null,
      "createdAt": "2020-03-30T07:09:20.191Z",
      "updatedAt": "2020-03-30T07:09:20.191Z"
    }
    ```

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
     **Content:** `{
      "message": "Todo not found",
      "errors": [
        "Todo not found"
      ]
    }`

  OR

  * **Code:** 500  <br />

  OR

  * **Code:** 401  <br />
    **Content:** `{ error : "Not authenticated" }`



* **Sample Call:**

  ```javascript
  $.ajax({
    method: "DELETE",
    url: `https://thawing-basin-47514.herokuapp.com/todos/${id}`,
    headers: {
      token: localStorage.getItem('token')
    }
  })
  ```
---
---
# User

***Register***
----
  Returns new User.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsImlhdCI6MTU4 NTU1MzQyMX0.yI9e8Ek5xW8Qm2hBla1HQwJ8YRbxbSiVy9fgv2EEBGA"
    }
    ```

* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "SequelizeValidationError" }`

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: 'https://thawing-basin-47514.herokuapp.com/register',
      data: {
        name, email, password
      }
    })
  ```

----
----
***Login***
----
  Returns User.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      email: req.body.email,
      password: req.body.password,
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJpZCI6MSwibmFtZSI6InRlc3RlciIsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsImlhdCI6MTU4 NTU1MzQyMX0.yI9e8Ek5xW8Qm2hBla1HQwJ8YRbxbSiVy9fgv2EEBGA"
    }
    ```

* **Error Response:**

  * **Code:** 400 <br />
    **Content:** {
    "message": "email or password wrong",
    "errors": [
        "email or password wrong"
      ]
    }

  OR

  * **Code:** 500 <br />

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: 'https://thawing-basin-47514.herokuapp.com/login',
      data: {
        email,
        password
      }
    })
  ```

----