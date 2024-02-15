const axios = require('axios');
const { formatCategories, formatResponseByQuery, formatResponseById } = require('../utils/formatItemResponse');

const getItemById = async(req, res) => {
    const id = req.params.id;

    if(!id){
        //Me gustaría moverlo al catch.
        return res.status(400).json({ error: 'Falta el parámetro ID.' });
    }
    try{
        const responseItem = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        const responseDescription = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
        if(responseItem.data.length === 0){
            //Me gustaría moverlo al catch.
            res.status(404).json({ error: 'No fueron encontrados resultados para la búsqueda proporcionada.' });
        }
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
        //Si sucede un error en el servidor, lo mostramos.
        res.status(500).json({err: err.message});
    }
}

const getItemsByQuery = async(req, res) => {
    const query = req.query.q;

    if(!query){
        //Me gustaría moverlo al catch.
        res.status(400).json({ error: 'Falta el parámetro de búsqueda.' });
    }
    try{
        //Solo es necesario visualizar 4 productos. Por lo que ahorramos recursos colocando un limit en el endpoint.
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`);
        if(response.data.results.length === 0){
            //Me gustaría moverlo al catch.
            res.status(404).json({ error: 'No fueron encontrados resultados para la búsqueda proporcionada.' });
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
        //Si sucede un error en el servidor, lo mostramos.
        res.status(500).json({err: err.message});
    }
}


module.exports = {
    getItemById,
    getItemsByQuery
}