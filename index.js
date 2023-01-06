const express = require('express');

const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log("Server running on port " + port);
})

app.get('/', (req, res) => {
    res.send("Server is running on Prot " + port);
  })

app.get('/aashihsh', (req, res) => {
    res.send("This is Aashish Endpoint....");
  })
