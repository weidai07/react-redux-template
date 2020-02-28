import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Error404 from './Error404';
import blueBg from '../assets/images/blue.jpg';
import Home from './Home';
import Header from './Header';
import Navbar from './Navbar';
import TicketList from './TicketList';
import c from './../constants';
// import Moment from 'moment';
// import { v4 } from 'uuid';


class App extends React.Component {

  render() {

    return (
      <div>
        <Navbar />
        <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />} />

            <Route path='/ticketlist' render={() => <TicketList 
               listOfTickets={this.props.masterTicketList} />} />

            <Route component={Error404} />
          </Switch>
        <style global jsx>{`
          body {
            font-family:  Arial, Helvetica, sans-serif;
            font-size: 18px;
            background: url('${blueBg}');
          }
        `}</style>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));
