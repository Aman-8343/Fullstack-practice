import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send('server is ready');
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
        id:1,
        title: 'a joke'
        },
        {
            id:2,
            title:'another joke'

        }
    ];
    res.send(jokes)
})

const port =process.env.PORT ||3000;

app.listen(port,()=>{
    console.log(`Server is listenting on port ${port}`)
});