import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { getRegions, selectRegion } from '../../actions/regions';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import './RegionsPage.scss';
import PageTitle from '../../components/PageTitle';

class RegionsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const regions = this.props.regions.map(region => 
      <Grid className='region-item' item xs={12}>
        <Card>
          <CardActionArea>
            <Link to={`/region/${region.id}`}>
              <CardContent key={region.id} className='region' >
                { region.name }
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    )

    return (
      <div className='main-menu'>
        <CssBaseline />
        <PageTitle>Regions</PageTitle>
        <Container maxWidth="sm">
          <Grid className='regions-container' container spacing={3}>
            { regions }
          </Grid>
        </Container>  
      </div>
    )
  }
}

const mapDispatchToProps = {
  getRegions,
  selectRegion
}

const mapStateToProps = state => ({
  regions: state.regions.data,
  isLoading: state.countries.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(RegionsPage)