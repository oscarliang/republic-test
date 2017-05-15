/**
 *  get weather information from cache by location name + current day and month
 * */
export const getWeatherCache = (location) => {
    let d = new Date();
    let key = location + d.getDate() + d.getMonth();
    let weatherCache = JSON.parse(localStorage.getItem("weather"));
    if (weatherCache !== null && typeof weatherCache[key] !== "undefined" && weatherCache[key] !== null)
        return weatherCache[key]
    else
        return null;
}


/**
 *  set weather information into cache by location name + current day and month
 * */
export const setWeatherCache = (location, value) => {
    let d = new Date();
    let key = location + d.getDate() + d.getMonth();
    let weatherCache = JSON.parse(localStorage.getItem("weather"));
    if (weatherCache === null) weatherCache = {};
    weatherCache[key] = value;
    localStorage.setItem("weather", JSON.stringify(weatherCache));
}
