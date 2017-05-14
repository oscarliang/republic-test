import React from 'react'
import { connect } from 'react-redux'
import AutoComplete from '../../components/autocomplete/autocomplete'

class CityContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: 'beijing'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps !== 'undefined' && nextProps !== null)
            alert(nextProps.searchkeywords);
    }

    render() {
        return (
            <AutoComplete keywords={this.state.keywords}></AutoComplete>
        )
    }
}


const mapStateToProps = (store) => ({
    searchkeywords: store.cityState.searchkeywords
});

export default connect(mapStateToProps)(CityContainer)