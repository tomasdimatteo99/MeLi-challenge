import ItemDetail from '@/components/ItemDetail/ItemDetail';
//ID
const axios = require('axios');

const getItem = async(id) =>{
  try{
      const response  = await axios.get(`http://localhost:8080/api/items/${id}`);
      return response.data;
  }catch(err){
      console.error('Error al obtener items: ', err);
  }
}

export default async function IDPage({ params }){
    const item = await getItem( params.id );

    return (
        <section>
            <ItemDetail
              item={ item }
            />
        </section>
    );
}


