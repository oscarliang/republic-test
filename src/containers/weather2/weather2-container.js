import React from 'react';
import { connect } from 'react-redux'
import Meteogram from '../../components/weather2/weather2';
import AutoComplete from '../../components/autocomplete/autocomplete'
import { getWeatherAPI } from '../../api/weather-api'

class Weather2Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: 'new york',
            returnGeoCode: false,
            loadingText: "Loading data from external source"
        }
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps !== 'undefined' && nextProps !== null) {
            let location = nextProps.searchkeywords;
                        // alert(location);
            this.getWeatherForecast(location);
        }
    }

    getWeatherForecast(location) {
        var self = this;
        self.refs.container.innerHTML = '<i class="fa fa-frown-o"></i> ' + this.state.loadingText;
        getWeatherAPI(location)
            .done((rs) => { 
                if (rs.query.results !== null) {
                    let json = rs.query.results.channel.item;
                    window.meteogram = new Meteogram(json, 'container', location);
                } else {
                    self.refs.container.innerHTML = '<i class="fa fa-frown-o"></i> Failed loading data, please try again later';
                }
            });
    }

    render() {
        return (
            <div>
                <AutoComplete keywords={this.state.keywords} returnGeoCode={this.state.returnGeoCode} />
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
    searchkeywords: store.cityState.searchkeywords
});

export default connect(mapStateToProps)(Weather2Container)