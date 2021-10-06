const express = require('express');
mongoose=require('mongoose')
const app = express();
const port = 4000;
app.get('/',(req,res)=>{
    res.send('ok');
})

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    })
})




