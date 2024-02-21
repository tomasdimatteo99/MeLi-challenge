import SearchItem from '@/components/SearchItem/SearchItem';

const axios = require('axios');

const getItems = async(searchParams) =>{
    try{
        const response  = await axios.get(`http://localhost:8080/api/items?q=${searchParams}`);
        return response.data;
    }catch(err){
        console.error('Error al obtener items: ', err);
    }
}

export default async function SearchPage({searchParams}){
    const items = await getItems(searchParams.search);

    return (
        <section>
            <SearchItem items={items}/>
        </section>
    );
}


