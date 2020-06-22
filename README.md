# Years of Experience
> Part 2 of the Glints Technical Assessment

This is a MERN stack application that shows a simple editable profile page that represents a candidate's basic information and work experience.

# Technologies Used
* JWT
* MongoDB
* Mongoose
* axios
* Gravatar
* bcrypt

# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

```bash
NODE_ENV=production node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)

## App Info

### Author
Xavier Paolo Jamito
(https://github.com/xavjamito)

### Version

2.0.0

### License

This project is licensed under the MIT License
