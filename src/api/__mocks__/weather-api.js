'use strict';

const results = {
  "query": {
    "count": 1,
    "created": "2017-05-15T00:25:23Z",
    "lang": "en-US",
    "results": {
      "channel": {
        "units": {
          "distance": "mi",
          "pressure": "in",
          "speed": "mph",
          "temperature": "F"
        },
        "title": "Yahoo! Weather - Clovis, CA, US",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2382067/",
        "description": "Yahoo! Weather for Clovis, CA, US",
        "language": "en-us",
        "lastBuildDate": "Sun, 14 May 2017 05:25 PM PDT",
        "ttl": "60",
        "location": {
          "city": "Clovis",
          "country": "United States",
          "region": " CA"
        },
        "wind": {
          "chill": "72",
          "direction": "315",
          "speed": "11"
        },
        "atmosphere": {
          "humidity": "26",
          "pressure": "995.0",
          "rising": "0",
          "visibility": "16.1"
        },
        "astronomy": {
          "sunrise": "5:52 am",
          "sunset": "7:58 pm"
        },
        "image": {
          "title": "Yahoo! Weather",
          "width": "142",
          "height": "18",
          "link": "http://weather.yahoo.com",
          "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
        },
        "item": {
          "title": "Conditions for Clovis, CA, US at 04:00 PM PDT",
          "lat": "36.82394",
          "long": "-119.696579",
          "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2382067/",
          "pubDate": "Sun, 14 May 2017 04:00 PM PDT",
          "condition": {
            "code": "28",
            "date": "Sun, 14 May 2017 04:00 PM PDT",
            "temp": "72",
            "text": "Mostly Cloudy"
          },
          "forecast": [{
            "code": "32",
            "date": "14 May 2017",
            "day": "Sun",
            "high": "71",
            "low": "48",
            "text": "Sunny"
          }, {
            "code": "32",
            "date": "15 May 2017",
            "day": "Mon",
            "high": "73",
            "low": "49",
            "text": "Sunny"
          }, {
            "code": "30",
            "date": "16 May 2017",
            "day": "Tue",
            "high": "74",
            "low": "51",
            "text": "Partly Cloudy"
          }, {
            "code": "34",
            "date": "17 May 2017",
            "day": "Wed",
            "high": "73",
            "low": "55",
            "text": "Mostly Sunny"
          }, {
            "code": "32",
            "date": "18 May 2017",
            "day": "Thu",
            "high": "81",
            "low": "52",
            "text": "Sunny"
          }, {
            "code": "32",
            "date": "19 May 2017",
            "day": "Fri",
            "high": "90",
            "low": "55",
            "text": "Sunny"
          }, {
            "code": "32",
            "date": "20 May 2017",
            "day": "Sat",
            "high": "94",
            "low": "60",
            "text": "Sunny"
          }, {
            "code": "32",
            "date": "21 May 2017",
            "day": "Sun",
            "high": "96",
            "low": "63",
            "text": "Sunny"
          }, {
            "code": "34",
            "date": "22 May 2017",
            "day": "Mon",
            "high": "96",
            "low": "65",
            "text": "Mostly Sunny"
          }, {
            "code": "34",
            "date": "23 May 2017",
            "day": "Tue",
            "high": "96",
            "low": "66",
            "text": "Mostly Sunny"
          }],
          "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/28.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Mostly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Sun - Sunny. High: 71Low: 48\n<BR /> Mon - Sunny. High: 73Low: 49\n<BR /> Tue - Partly Cloudy. High: 74Low: 51\n<BR /> Wed - Mostly Sunny. High: 73Low: 55\n<BR /> Thu - Sunny. High: 81Low: 52\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2382067/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
          "guid": {
            "isPermaLink": "false"
          }
        }
      }
    }
  }
}

export const getWeatherAPI = () => {
  let promise = new Promise(function (resolve, reject) {
    process.nextTick(resolve(results))
  })
  return promise
}
