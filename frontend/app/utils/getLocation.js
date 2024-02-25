const axios = require('axios');
const { notFound } = require('next/navigation');

//Mover al backend.
const getLocation = async( id ) =>{
  try{
      const response  = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      const location = response.data.seller_address.state.name;
      return {location: location};
  }catch(err){
      notFound()
  }
}

module.exports = { getLocation };
