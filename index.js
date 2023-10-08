const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const { PORT } = require('./application/config.js');

app.use(cors());
const port = PORT

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (req, res) => {
  res.send('Hai!');
});

//modules
const users = require('./modules/users');

//routes
app.use('/api',users);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
