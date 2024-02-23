import SearchItem from '@/components/SearchItem/SearchItem';
import { getItemsByQuery } from '../api/getItemsByQuery';

export async function generateMetadata({searchParams}) {
    return {
        title: `${searchParams.search} | Mercado Libre`,
        description: `Envíos gratis en el día. Compra ${searchParams.search} en cuotas sin interés. Conoce nuestras ofertas y promociones.`,
        keywords: `${searchParams.search}, compras en linea, tienda online, ventas onlinbe, envios rapidos, envios gratis, mercadolibre, productos`
    }
}


export default async function SearchPage({searchParams}){
    const items = await getItemsByQuery(searchParams.search);

    return (
        <section>
            <SearchItem items={items}/>
        </section>
    );
}


