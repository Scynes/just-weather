import useWeatherAPI from './useWeatherAPI';

interface LocationInfo {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
  }

export default (search: string) => useWeatherAPI<LocationInfo[]>(`/search.json?q=${ search ? search : 'lon' }`);