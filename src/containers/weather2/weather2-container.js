import React from 'react';
import $ from 'jquery';
import Meteogram from '../../components/weather2/weather2'; 

class Weather2Container extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        let location = "los angeles";
        $.ajax({
            dataType: 'json',
            url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20'+ location +'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
            success: function (rs) {
                let json = rs.query.results.channel.item;
                window.meteogram = new Meteogram(json, 'container', location);
            },
            error: Meteogram.prototype.error
        });
    }

    render() {
        return <div id="container" >
            <div id="loading">
                <i ></i> Loading data from external source
    </div>
        </div>
    }
}

export default Weather2Container;