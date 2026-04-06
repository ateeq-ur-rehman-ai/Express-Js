const express = require('express');
const path = require('path');
const app = express();
const port = 3000


// const middlewareFunction = (req, res, next) => {
//   console.log(req);
//   next();
// }

app.use(express.static(path.join(__dirname,'public')));

// app.use(middlewareFunction);

app.get('/Contact/:name', (req, res) => {
  res.send('Hello World!' + req.params.name);
}) 

 

app.get('/about', (req, res) => {
  // res.sendFile(path.join(__dirname ,'index.html'));
  // res.status(500);

  res.json({ name: 'John', age: 30  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})