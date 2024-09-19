const express =  require("express");
const app = express();

// app.use((req,res) => {
//     console.log('new request');
//     res.send('<h1>This is my webpage!<h1>')
    
// })

app.get('/cats', (req, res) => {
    res.send('MAOOOO = new maii')
    
})
app.post('/cats',(req,res) => {
    res.send('maoooooooooooooo posted')
})

app.get('/dogs', (req,res) => {
    res.send('WOOF')
})

app.get('/search',(req,res) => {
    console.log(res.query);
    res.send('this is a search')
    
})

app.listen(3000, () => {
    console.log('listening on 3000');
})


