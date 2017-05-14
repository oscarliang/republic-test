import React from 'react';
import DonutChart from '../../components/highchart/donutChart';

class DonutContainer extends React.Component {
    
    componentWillMount(){
        this.state = { 
            pieData: [{ name: "Firefox", y: 6 }, { name: "MSIE", y: 4 }, { name: "Safari", y: 4 }, { name: "Opera", y: 1 }, { name: "Chrome", y: 7 }] 
        };
    }

    render() {
        return <DonutChart data={this.state.pieData} />
    }
}

export default DonutContainer;