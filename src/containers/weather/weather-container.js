import React from 'react'
import { connect } from 'react-redux'
import Meteogram from '../../components/weather/weather'
import AutoComplete from '../../components/autocomplete/autocomplete'
import * as actions from '../../actions/weather-actions'
import { getWeatherAPI } from '../../api/weather-api'
import store from '../../store'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getWeatherCache, setWeatherCache } from '../../utils/cachFactory'

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: 'New York, NY, United States', //init New York as default city
            returnGeoCode: false,
            loadingText: "Loading data from Yahoo Weather ...",
            refreshIconState: true,  //refresh button status
            resendingCount: 0 //count that identify if need to resend the API request or not
        }
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps !== 'undefined' && nextProps !== null) {
            let location = nextProps.searchkeywords;
            
            //Start loading animation
            this.beginLoading();

            //call the weather API
            this.getWeatherForecast(location);

        }
    }

    /**
     * Start loading animation
     */
    beginLoading() {
        //show the loading bar
        store.dispatch(showLoading())
        this.setState({
            refreshIconState: true
        })
    }

    /**
     * Ending loading animation
     */
    endLoading() {
        //hide the loading bar
        store.dispatch(hideLoading());
        //stop the page refreshing
        store.dispatch(actions.setWeatherRefresh(false));
        this.setState({
            refreshIconState: false,
            resendingCount: 0
        })
    }

    /**
     * Get the weather forecast data
     */
    getWeatherForecast(location) {
        var self = this;
        self.refs.container.innerHTML = '<i class="fa fa-smile-o"></i> ' + this.state.loadingText;

        let weatherCachData = getWeatherCache(location);

        //check the location has been visit or not
        if (weatherCachData !== null) {
            //run the apps from cache data
            window.meteogram = new Meteogram(weatherCachData, 'container', location);
            //Ending loading animation
            self.endLoading();
        } else {
            //run the apps from weather API
            getWeatherAPI(location)
                .done((rs) => {
                    //Yahoo API will have limit with request time. Sometime, can not get API result
                    if (rs.query.results !== null) {
                        let forecastItems = rs.query.results.channel.item;
                        setWeatherCache(location, forecastItems);
                        window.meteogram = new Meteogram(forecastItems, 'container', location);
                    } else {
                        //we try three times if the API call failed
                        if (self.state.resendingCount < 3) {
                            self.setState({ resendingCount: self.state.resendingCount + 1 });
                            self.getWeatherForecast(location);
                            return
                        } else {
                            //show the error message when the remote server is not available
                            self.refs.container.innerHTML = '<i class="fa fa-frown-o"></i> Failed loading data, please try again later';
                        }
                    }
                    //Ending loading animation
                    self.endLoading();
                });
        }
    }



    render() {
        return (
            <div>
                <AutoComplete ref="autoComplete" keywords={this.state.keywords} returnGeoCode={this.state.returnGeoCode} refreshIconState={this.state.refreshIconState} />
                <div id="container" ref="container">
                    <div id="loading">
                        {this.state.loadingText}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (store) => ({
    searchkeywords: store.weatherState.searchkeywords,
    searchkeywordsRefresh: store.weatherState.searchkeywordsRefresh
});

export default connect(mapStateToProps)(WeatherContainer)