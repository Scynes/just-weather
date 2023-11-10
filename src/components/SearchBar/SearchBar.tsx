import useWeatherSearch from '@hooks/useWeatherSearch';
import { useState } from 'react';
import debounce from 'lodash.debounce';

export default () => {

    const [ search, setSearch ] = useState('');

    const { isLoading, collection } = useWeatherSearch(search);

    const handleFuzzySearch = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        debounceSearch(event.target.value)
    }

    const debounceSearch = debounce(value => setSearch(value), 500);

    return (
        <div className='grow-1 relative'>
            <input onChange={ handleFuzzySearch } type="text" name="search" id="search" className='search-bar height-full width-full'/>
            { search.length > 0 && 
                <div className="search-suggestions absolute width-full">
                    <ul>
                        { collection?.map(( entry, index ) => (
                            <li key={ index }>{ `${entry.name}, ${entry.region}, ${entry.country}` }</li>
                        )) }
                    </ul>
                </div>
            }
        </div>
    );
}