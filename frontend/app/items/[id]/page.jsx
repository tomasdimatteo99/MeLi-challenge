import ItemDetail from '@/components/ItemDetail/ItemDetail';
import { getItemById } from '../../api/getItemById';

export default async function IDPage({ params }){
    const item = await getItemById( params.id );

    return (
        <section>
            <ItemDetail
              item={ item }
            />
        </section>
    );
}


