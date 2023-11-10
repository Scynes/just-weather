import axios from 'axios';

import { useState, useEffect } from "react";

const API = axios.create({ baseURL: 'http://api.weatherapi.com/v1/' });

/**
 * A custom hook for fetching a collection of data from a given API endpoint.
 *
 * @template T The type of data items in the collection.
 * @param {string} endpoint The API endpoint to fetch data from.
 */
export default <T>(endpoint: string) => {

    const [ collection, setCollection ] = useState<T>();
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {

        const controller = new AbortController();

        API.get(endpoint + `&&key=${ import.meta.env.VITE_WEATHER_API_KEY }`, { signal: controller.signal })
            .then(response => setCollection(response.data))
            .catch(error => (!(error instanceof axios.CanceledError) && setError(error.message)))
            .finally(() => {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            });

        return () => controller.abort();
    }, [ endpoint ]);

    return { collection, error, isLoading };
}