const axios = require('axios');
const { formatCategories, formatResponseByQuery, formatResponseById } = require('../utils/formatItemResponse');

const getItemById = async(req, res) => {
    const id = req.params.id;

    try{
        if(!id){
            throw new Error( 'Falta el parámetro ID.' )
        }
        //Promise.all
        const [responseItem, responseDescription] = await Promise.all([
            axios.get(`https://api.mercadolibre.com/items/${id}`),
            axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        ])

        //Items
        const items = formatResponseById(responseItem.data);
        //Result
        const result = {
            author: {
                name: "Tomas",
                lastname: "Di Matteo",
            },
            items: items,
            description: responseDescription.data.plain_text
        }

        res.json(result)
    } catch(err){
        //Error 400 - Bad request
        res.status(404).json({err: err.message});
    }
}

const getItemsByQuery = async(req, res) => {
    const query = req.query.q;

    try{
        if(!query){
            throw new Error( 'Falta el parámetro de búsqueda.' )
        }

        //Solo es necesario visualizar 4 productos. Por lo que ahorramos recursos colocando un limit en el endpoint.
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`);

        if(response.data.results.length === 0){
            throw new Error( 'No fueron encontrados resultados para la búsqueda proporcionada.' );
        }

        //Items
        const items = formatResponseByQuery(response.data.results);
        //Categories
        const categories = formatCategories(response.data);
        //Result
        const result = {
            author: {
                name: "Tomas",
                lastname: "Di Matteo",
            },
            categories: categories,
            items: items
        }

        res.json(result)
    } catch(err){
        //Error 400 - Bad request
        res.status(404).json({error: err.message});
    }
}

module.exports = {
    getItemById,
    getItemsByQuery
}