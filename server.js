const express = require('express')
const app = express()
const port = 3000

const appdata = []

app.use(express.static('public'))
app.use(express.json())

app.post('/submit', (req, res) => {
  const data = req.body
  const calories_burned_per_rep = 1

  data.total_reps = data.sets * data.reps
  data.calories_burned = calories_burned_per_rep * data.total_reps

  appdata.push(data)

  res.json(appdata)
})

app.post('/delete', (req, res) => {
  const data = req.body
  appdata.splice(data.index, 1)
  res.json(appdata)
})

app.listen(process.env.PORT || port)