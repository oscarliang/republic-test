import React from 'react';
import Highcharts from 'highcharts';

class DonutChart extends React.Component {
    constructor(props) {
        super(props);
        this.chart = undefined;
    }

    componentDidMount() {
        this.chart = new Highcharts[this.props.type || "Chart"]("donutChart", {
            chart: {
                type: 'pie'
            },
            title: 'Browser Market sahre',
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: this.props.data,
                size: '100%',
                innerSize: '85%',
                showInLegend: true,
                dataLabels: {
                    enabled: true
                }
            }]
        });
    }

    componentWillReceiveProps(props) {
        this.chart.series[0].setData(props.data);
    }

    render() {
        return (
            <div id='donutChart'>
            </div>
        )
    }
}

export default DonutChart;