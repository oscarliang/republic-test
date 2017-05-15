import React from 'react'
import { connect } from 'react-redux'
import Meteogram from '../../components/weather/weather'
import AutoComplete from '../../components/autocomplete/autocomplete'
import * as actions from '../../actions/location-actions'
import { getWeatherAPI } from '../../api/weather-api'
import store from '../../store'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: 'New York, NY, United States', //init New York as default city
            returnGeoCode: false,
            loadingText: "Loading data from external source",
            refreshIconState: true  //refresh button status
        }
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps !== 'undefined' && nextProps !== null) {
            let location = nextProps.searchkeywords;

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
        store.dispatch(actions.setLocationRefresh(false));
        this.setState({
            refreshIconState: false
        })
    }

    /**
     * Get the weather forecast data
     */
    getWeatherForecast(location) {
        var self = this;
        self.refs.container.innerHTML = '<i class="fa fa-smile-o"></i> ' + this.state.loadingText;
        self.beginLoading();

        getWeatherAPI(location)
            .done((rs) => {
                if (rs.query.results !== null) {
                    let json = rs.query.results.channel.item;
                    window.meteogram = new Meteogram(json, 'container', location);
                } else {
                    self.refs.container.innerHTML = '<i class="fa fa-frown-o"></i> Failed loading data, please try again later';
                }
                self.endLoading();
            });
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
    searchkeywords: store.locationState.searchkeywords,
    searchkeywordsRefresh: store.locationState.searchkeywordsRefresh
});

export default connect(mapStateToProps)(WeatherContainer)