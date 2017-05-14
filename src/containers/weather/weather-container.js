import React from 'react';
import $ from 'jquery';
import Meteogram from '../../components/weather/weather'; 

class WeatherContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {

        var place = 'United_Kingdom/England/London';
        //place = 'France/Rhône-Alpes/Val_d\'Isère~2971074';
        //place = 'Norway/Sogn_og_Fjordane/Vik/Målset';
        //place = 'United_States/California/San_Francisco';
        //place = 'United_States/Minnesota/Minneapolis';
        location.hash = 'https://www.yr.no/place/' + place + '/forecast_hour_by_hour.xml';

        $.ajax({
            dataType: 'json',
            url: 'https://www.highcharts.com/samples/data/jsonp.php?url=' + location.hash.substr(1) + '&callback=?',
            success: function (xml) {
                window.meteogram = new Meteogram(xml, 'container');
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

export default WeatherContainer;