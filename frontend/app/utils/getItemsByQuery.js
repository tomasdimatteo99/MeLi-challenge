const axios = require('axios');
const { notFound } = require('next/navigation');

const getItemsByQuery = async(searchParams = "iphone") =>{
    try{
        const response  = await axios.get(`http://localhost:8080/api/items?q=${searchParams}`);
        return response.data;
    }catch(err){
        notFound()
    }
}

module.exports = { getItemsByQuery };