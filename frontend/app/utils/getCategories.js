const axios = require('axios');
const { notFound } = require('next/navigation');

//Mover al backend.
const getCategories = async( id ) =>{
  try{
      const response  = await axios.get(`https://api.mercadolibre.com/categories/${id}`);
      const categories = response.data.path_from_root.map( catVal => catVal.name);
      return {categories: categories};
  }catch(err){
      notFound()
  }
}

module.exports = { getCategories };
