import SearchItem from '@/components/SearchItem/SearchItem';
import { getItemsByQuery } from '../api/getItemsByQuery';

export default async function SearchPage({searchParams}){
    const items = await getItemsByQuery(searchParams.search);

    return (
        <section>
            <SearchItem items={items}/>
        </section>
    );
}


