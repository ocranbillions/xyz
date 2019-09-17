import React from 'react'
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Transactions(props) {
  return (
    <div>
      {console.log(props)}
      <h1>Transacations page!</h1>
    </div>
  )
}

// Transactions.propTypes = {

// }

export default withRouter(Transactions)

