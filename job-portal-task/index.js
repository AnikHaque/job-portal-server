const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5002;

app.use(cors());

const freshers = require('./data/courses.json');
const experienced = require('./data/experienced.json');

app.get('/', (req, res) => {
  res.send('Hiiii There!!!!!!!')
})

app.get('/freshers', (req, res) =>{
    res.send(freshers)
})
app.get('/experienced', (req, res) =>{
    res.send(experienced);
})

app.get('/fresher/:id', (req, res) =>{
    const id = req.params.id;
    Singlefresher = freshers.find(fresher=>fresher.id ===id) || 'No fresher Found !'
    res.send(Singlefresher)
})
app.get('/experienced/:id', (req, res) =>{
    const id = req.params.id;
    EJob = experienced.find(experience=>experience.id ===id) || 'No fresher Found !'
    res.send(EJob)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
