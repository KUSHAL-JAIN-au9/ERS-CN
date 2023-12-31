
# ERS-CN
Employee Review System

 Employee Review System an application that allows employees to submit feedback toward each other’s performance

![Screenshot (3)](https://github.com/KUSHAL-JAIN-au9/ERS-CN/assets/36365855/d4704dda-cebf-4287-b180-bcd22694b18e)

![Screenshot (4)](https://github.com/KUSHAL-JAIN-au9/ERS-CN/assets/36365855/99e92ad8-dc61-496c-9b94-dd5ba8d8d7ae)

![Screenshot (5)](https://github.com/KUSHAL-JAIN-au9/ERS-CN/assets/36365855/7b1f292a-cfb9-4466-99c6-77c7817ead2f)

![Screenshot 2023-08-02 173033](https://github.com/KUSHAL-JAIN-au9/ERS-CN/assets/36365855/328f2590-7d12-48c5-a7bc-77d6c3c5d73b)

![Screenshot (6)](https://github.com/KUSHAL-JAIN-au9/ERS-CN/assets/36365855/be046d98-e234-4da5-9df5-4652111d2dd5)

![Screenshot 2023-08-02 173127](https://github.com/KUSHAL-JAIN-au9/ERS-CN/assets/36365855/3caf2c1e-c253-42ca-b20d-209760edef2c)

![Screenshot (7)](https://github.com/KUSHAL-JAIN-au9/ERS-CN/assets/36365855/fd623f60-cec1-4eeb-872b-97f3bf37503a)

## Features

- Admin view
  - Add/remove/update/view employees
  - Add/update/view performance reviews
  - Assign employees to participate in another employee's performance review
  - 
- Employee view
  - List of performance review requiring feedback
  - Submit feedback
  - An employee can only see employee list and reviews, only admin can make an employee an admin


  ## Folder Structure

The folder structure of this application is as follows:

```
├── controllers
│   └── employeeController.js  
│   └── homeController.js  
│   └── reviewController.js  
│   └── userController.js  
├── config
│   └── mongoose.js
│   └── passport-local-strategy.js
├── models
│   └──employeeSchema.js
│   └──reviewSchema.js
│   └──userSchema.js
├── routes
│   └── employeeRoutes.js
│   └── index.js
│   └── reviewRoutes.js
│   └── userRoutes.js
├── views
│   └── _bootstrap_mets.ejs
│   └── _bootstrap_mets.ejs
│   └── _header.ejs
│   └── add_employee.ejs
│   └── edit_employee.ejs
│   └── edit_review.ejs
│   └── allocateInterview.ejs
│   └── review.ejs
│   └── home.ejs
│   └── signin.ejs
├── .env
├── .gitignore
├── package.json
├── README.md
└── index.js
```

- `controllers`: Contains the logic for handling HTTP requests and responses.
- `models`: Contains the data models and schemas for interacting with databases or other data sources.
- `routes`: Defines the application routes and maps them to the corresponding controller methods.
- `index.js`: The main application file where the Express app is created and configured.
- `.env.example`: An example file for environment variables. Rename it to `.env` and provide your own values.
- `.gitignore`: Specifies files and directories that should be ignored by version control.
- `package.json`: Contains metadata and dependencies for the Node.js application.
- `README.md`: This file, providing information about the application.



## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)


## Getting Started
  


### Prerequisites
- Node.js (v14 or higher)
- NPM (or Yarn)

### Installation
```bash
git clone https://github.com/KUSHAL-JAIN-au9/ERS-CN.git
cd ERS-CN
npm install
# or
yarn install
```

### Configuration
Example:

Create a `.env` file in the root directory and set the required environment variables:

```
MONGO_URI = "your mongo url"
PORT = 8000
SECRET = "your secret key"
```

## Usage


```bash
npm start
# or
yarn start
```

### LOGIN CREDENTIALS
```bash
admin login example
 email:kushal@gmail.com
 password:1234

employee login example
 email:rajesh@gmail.com
 password:1234

```


