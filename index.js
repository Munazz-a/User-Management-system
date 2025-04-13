const express = require('express');
const app = express();
const users = [];
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));



app.get('/',(req, res)=>{
    let userCount = users.length;
    res.render('index', {users, userCount})
})

app.post('/save-user', (req,res)=>{
    let { name, email, img } = req.body;
    let user = {
        name : name,
        email : email,
        img : img
    }
    users.push(user);
    res.redirect('/')
})

app.get('/add',(req, res)=>{
    res.render('addUser')
})

app.post('/delete',(req, res)=>{
    let {userId} = req.body
    users.splice(userId, 1);
    res.redirect('/')
})

app.get('/edit',(req, res)=>{
    res.render('edit')
})

app.post('/edit', (req,res)=>{
    let {userId} = req.body
    let user = users[userId]
    res.render('edit', {user, userId})
})

app.post('/update-user', (req, res)=>{
    let {name, email, img, userId} = req.body
    let user = {
        name : name,
        email : email,
        img : img
    }
    users[userId] = user;
    res.redirect('/')
})

app.get('*',(req,res)=>{
    res.render('error')
})


app.listen(3000, ()=>{
    console.log('Server working at 3000')
})