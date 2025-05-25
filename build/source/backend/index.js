const app = require('express')();
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

// ENVIRONMENTAL VARIABLES
const key = process.env.PIXEL_KEY

app.use(cors());
//app.use(express.json());
let x = `<center><h1>${key}</h1></center>`

app.get('/search', async(req, res) => {
    const query = req.query.query;
    if(!query){
        res.status(400).json({ error : 'Please Provide A Query' });
    }

    try{
        const response =await axios.get('https://api.pexels.com/v1/search', {
            headers:{
                Authorization: key,
            },
            params:{
                query: query,
                per_page: 20,
            }
        })
        res.send(response.data.photos);
    }catch(error){
        res.status(500).json({ error: 'Hey Bhushan There might be a Server Error' });
    }
    
});

app.get('/' ,(req,res) =>{
    res.send('<h2>Hey Bhushan</h2>');
})

app.listen(9676, () => {
    console.log('Server is running on port 9676');
});
