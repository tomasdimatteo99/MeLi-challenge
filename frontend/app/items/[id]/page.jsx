import ItemDetail from '@/components/ItemDetail/ItemDetail';
import { getItemById } from '../../api/getItemById';

export async function generateMetadata({params}) {
    const item = await getItemById( params.id );
    return {
        title: `${item.items.title} | Mercado Libre`,
        description: `Envíos gratis en el día. Compra ${item.items.title} en cuotas sin interés. Conoce nuestras ofertas y promociones.`,
        keywords: `${item.items.title}, compras en linea, tienda online, ventas onlinbe, envios rapidos, envios gratis, mercadolibre, productos`
    }
}

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


