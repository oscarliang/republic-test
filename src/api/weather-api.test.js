'use strict';

jest.mock('./weather-api');
import * as weather from './weather-api'

// The promise that is being tested should be returned.
it('test promises with getWeatherAPI', () => {
    return weather.getWeatherAPI()
        .then(results => {
            expect(results.query.results.channel.item.forecast.length).toEqual(10)
        });
});

it('test promises with get correct weather nodes', () => {
    return weather.getWeatherAPI()
        .then(results => {
            let title  = "Yahoo! Weather - Clovis, CA, US";
            expect(results.query.results.channel.title).toEqual(title)
        });
});
