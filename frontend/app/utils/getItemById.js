const axios = require('axios');
const { notFound } = require('next/navigation');

const getItemById = async( id ) =>{
  try{
      const response  = await axios.get(`http://localhost:8080/api/items/${id}`);
      return response.data;
  }catch(err){
      notFound()
  }
}

module.exports = { getItemById };