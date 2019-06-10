import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const CountComponent = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => dispatch({ type: 'ADD' })}>Add One</button>
    <button onClick={() => dispatch({ type: 'REMOVE' })}>Remove One</button>
    <button onClick={() => dispatch({ type: 'ADDTEN' })}>Add Ten</button>
    <button onClick={() => dispatch({ type: 'REMOVETEN' })}>Remove Ten</button>
    <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
  </div>
);

export default connect(
  mapStateToProps
)(CountComponent);

