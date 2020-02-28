import React from 'react';
import PropTypes from 'prop-types';


function TicketList(props) {
 
  console.log("I am TicketList prop  " + props.listOfTickets.testObj.name);
  let tester = props.listOfTickets.testObj;

  let background = {
    backgroundColor: 'green'
  };

  return (
    <div style={background}>
      <h1>I am the TicketList!</h1>
      <h2>{tester.name}</h2>
      <h2>{tester.location}</h2>
      <h2>{tester.issue}</h2>
      <h2>{tester.id}</h2>
    </div>
  );
}

TicketList.propTypes = {
  listOfTickets: PropTypes.object
};

export default TicketList;
