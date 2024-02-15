//res = responseItem.data
function mapItemsbyId(res){
    const response = {
        id: res.id,
        title: res.title,
        price: {
            currency: res.currency_id,
            amount: res.price,
            //Mejorable con un split del price con un ".".
            decimals:2
        },
        picture: res.thumbnail,
        condition: traducirCondicion(res.condition),
        free_shipping: res.shipping.free_shipping,
        sold_quantity: res.sold_quantity || 0 ,
    }
    return response;
}

//res = response.data.results
function mapItemsbyQuery(res){
    const response = res.map( item => ({
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            //Mejorable con un split del price con un ".".
            decimals:2
        },
        picture: item.thumbnail,
        condition: traducirCondicion(item.condition),
        free_shipping: item.shipping.free_shipping
    }))
    return response;
}

function traducirCondicion(condition){
    if(condition === "new"){
        return "Nuevo"
    } else{
        return "Usado"
    }
}

//res = response.data
function mapCategories(res){
    const filters = res.filters;
    if(filters){
        const categoryFilter = filters.find( filters => filters.id === "category")
        if( categoryFilter ){
            const values = categoryFilter.values;
            if( values ){
                const categoryValue = values[0].path_from_root.map( catVal => catVal.name);
                return categoryValue;
            }
        }
    } else{
        return "N/A.";
    }
}

module.exports = {
    mapItemsbyId,
    mapItemsbyQuery,
    mapCategories
}