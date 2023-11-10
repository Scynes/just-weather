import useWeatherAPI from './useWeatherAPI';

interface WeatherForecast {

    location: {
        name: string,
        region: string,
        country: string,
    },

    current: {
        temp_f: number,
        temp_c: number,
        condition: {
            text: string,
            icon: string,
            code: number,
        },
        wind_kph: number,
        wind_mph: number,
        uv: number,
        vis_km: number,
        vis_miles: number,
        pressure_in: number,
        precip_in: number,
      },
}

export default () => useWeatherAPI<WeatherForecast>('/forecast.json?q=22546');