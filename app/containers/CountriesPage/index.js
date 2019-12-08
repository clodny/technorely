import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountries } from '../../actions/countries';
import PageTitle from '../../components/PageTitle';
import EnhancedTable from '../../components/Table';
import ModalDialog from '../../components/ModalDialog';

import './CountriesPage.scss';
import { Button } from '@material-ui/core';

const COLUMNS = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'capital', numeric: false, disablePadding: false, label: 'Capital' },
  { id: 'population', numeric: true, disablePadding: false, label: 'Population' },
]

class CountriesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.state = {
      selectedCountry: null
    }
  }

  componentDidMount() {
    const { regionId } = this.props.match.params
    this.props.getCountries(regionId)
  }

  onCountrySelect = (country) => {
    this.setState({ selectedCountry: country })
  }

  renderCountryInfo = () => {
    const { selectedCountry } = this.state
    return (
      <ModalDialog 
        onClose={() => this.onCountrySelect(null)} 
        open={!!this.state.selectedCountry} 
        title={`${selectedCountry.name} / ${selectedCountry.nativeName}`}
        flag={selectedCountry.flag}>
        <ul className='country-info'>
          <li className='country-info-item'>
            <span className='prop-name'>Numeric Code: </span>
            <span className='prop-value'>{selectedCountry.numericCode} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Region: </span>
            <span className='prop-value'>{selectedCountry.region} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Subregion: </span>
            <span className='prop-value'>{selectedCountry.subregion} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Capital: </span>
            <span className='prop-value'>{selectedCountry.capital} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Timezones: </span>
            <span className='prop-value'>{selectedCountry.timezones.join(', ')} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Latitude: </span>
            <span className='prop-value'>{selectedCountry.latlng[0]} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Longitude: </span>
            <span className='prop-value'>{selectedCountry.latlng[1]} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Languages: </span>
            <span className='prop-value'>{selectedCountry.languages.map(lang => lang.name).join(', ')} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Currencies: </span>
            <span className='prop-value'>{selectedCountry.currencies.map(curr => `${curr.name} ${curr.symbol} ${curr.code}`).join(', ')} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Demonym: </span>
            <span className='prop-value'>{selectedCountry.demonym} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Borders: </span>
            <span className='prop-value'>{selectedCountry.borders.join(', ')} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Area: </span>
            <span className='prop-value'>{selectedCountry.area} </span>
          </li>
          <li className='country-info-item'>
            <span className='prop-name'>Population: </span>
            <span className='prop-value'>{selectedCountry.population} </span>
          </li>
        </ul>
      </ModalDialog>
    )
  }

  render() {
    const { regionId } = this.props.match.params
    const selectedRegion = this.props.regions.find(region => region.id === regionId)
    return (
      <div className='countries-page'>
        <div className='header'>
          <Button><Link className='back-button' to='/region'>Back</Link></Button>
          <PageTitle>Countries of { selectedRegion.name }</PageTitle>
        </div>
        
        <EnhancedTable columns={COLUMNS} data={this.props.countries} onSelect={this.onCountrySelect}/>
        { this.state.selectedCountry && this.renderCountryInfo() }
      </div>
    )
  }
}

CountriesPage.propTypes = {};

const mapDispatchToProps = {
  getCountries
}

const mapStateToProps = state => ({
  regions: state.regions.data,
  countries: state.countries.data,
  isLoading: state.countries.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesPage);

