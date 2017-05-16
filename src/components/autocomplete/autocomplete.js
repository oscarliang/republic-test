import React from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import store from '../../store'
import classNames from 'classnames'
import * as actions from '../../actions/weather-actions'

/**
 * AutoComplete is a component that used to implement with react-places-autocomplete widget
 */
class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: this.props.keywords,  //input location name
            returnGeoCode: this.props.returnGeoCode,  //tag to decide will return the Geo lat or lng or not
            geocodeResults: null,
            loading: false
        }
        this.handleSelect = this.handleSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
        this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
    }

    componentDidMount() {
        this.handleSelect(this.state.address);
    }

    /**
     * Event to be trigger after the droplist is selected
     */
    handleSelect(address) {
        this.setState({
            address,
            loading: true
        })

        // dispatch the search keywords to the store
        store.dispatch(actions.setWeatherSearchkeywords(address));

        //tag to decide will return Geo lat and lng or not
        if (this.state.returnGeoCode) {
            geocodeByAddress(address, (err, { lat, lng }) => {
                if (err) {
                    console.log('Oh no!', err)
                    this.setState({
                        geocodeResults: this.renderGeocodeFailure(err),
                        loading: false
                    })
                }
                console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
                this.setState({
                    geocodeResults: this.renderGeocodeSuccess(lat, lng),
                    loading: false
                })
            })
        } else {
            this.setState({
                loading: false
            })
        }
    }

    /**
     * Action when refresh icon is clicked
     */
    handlereRefresh() {
        store.dispatch(actions.setWeatherRefresh(true));
    }

    /**
     * Action when the item in the weather drop list is selected
     */
    handleChange(address) {
        this.setState({
            address,
            geocodeResults: null
        })
    }

    renderGeocodeFailure(err) {
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Error!</strong> {err}
            </div>
        )
    }

    renderGeocodeSuccess(lat, lng) {
        return (
            <div className="alert alert-success" role="alert">
                <strong>Success!</strong> Geocoder found latitude and longitude: <strong>{lat}, {lng}</strong>
            </div>
        )
    }

    render() {
        const cssClasses = {
            root: 'form-group',
            input: 'Demo__search-input form-control',
            autocompleteContainer: 'Demo__autocomplete-container',
        }

        // refresh icon className
        const refreshClasses = classNames(
            { 'fa': true },
            { 'fa-refresh': true },
            { 'locationRefresh': true },
            { 'icon-refresh-animate': this.props.refreshIconState } // to control the refresh icon spinning
        )


        const AutocompleteItem = ({ formattedSuggestion }) => (
            <div className="Demo__suggestion-item">
                <i className='fa fa-map-marker Demo__suggestion-icon' />
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small className="text-muted">{formattedSuggestion.secondaryText}</small>
            </div>)

        const inputProps = {
            type: "search",
            value: this.state.address,
            onChange: this.handleChange,
            onBlur: () => { console.log('Blur event!'); },
            onFocus: () => { console.log('Focused!'); },
            autoFocus: true,
            placeholder: "Search Places",
            name: 'Demo__input',
            id: "my-input-id",
        }

        return (
            <div className='row'>
                <div className='container autocompleteWrapper'>
                    <i id="refreshIcon" className={refreshClasses} aria-hidden="true" onClick={this.handlereRefresh}></i>
                    <PlacesAutocomplete
                        onSelect={this.handleSelect}
                        autocompleteItem={AutocompleteItem}
                        onEnterKeyDown={this.handleSelect}
                        classNames={cssClasses}
                        inputProps={inputProps}
                    />
                    {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
                    {!this.state.loading && this.state.geocodeResults ?
                        <div className='geocoding-results'>{this.state.geocodeResults}</div> : null}
                </div>
            </div>
        )
    }
}

export default AutoComplete;