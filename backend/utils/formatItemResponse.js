function translateCondition(condition){
    if(condition === "new"){
        return "Nuevo"
    } else{
        if(condition === "used"){
            return "Usado"
        } else{
            return "No especifica"
        } 
    }
}

function countDecimals( amount ) {
    const decimalPart = amount.toString().split('.')[1];
    return decimalPart ? decimalPart.length : 0;
}

//res = responseItem.data
function formatResponseById(res){
    const response = {
        id: res.id,
        title: res.title,
        price: {
            currency: res.currency_id,
            amount: res.price,
            decimals: countDecimals(res.price)
        },
        picture: res.pictures[0].url || res.thumbnail,
        condition: translateCondition(res.condition),
        free_shipping: res.shipping.free_shipping,
        sold_quantity: res.sold_quantity || 0 ,
    }
    return response;
}

//res = response.data.results
function formatResponseByQuery(res){
    const response = res.map( item => ({
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: countDecimals(item.price)
        },
        picture: item.thumbnail,
        condition: translateCondition(item.condition),
        free_shipping: item.shipping.free_shipping
    }))
    return response;
}

//res = response.data
function formatCategories(res){
    const filters = res.filters;
    if( filters ){
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
    formatResponseById,
    formatResponseByQuery,
    formatCategories
}