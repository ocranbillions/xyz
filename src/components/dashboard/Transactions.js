import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Transactions(props) {

  // useEffect(() => {
  //   fetchAccountsByEmail(user.email);
  // }, [fetchAccountsByEmail]);

  return (
    <div>
      {console.log(props.match.params.accountnumber)}
      <h1>Transacations page!</h1>
    </div>
  )
}

// Transactions.propTypes = {

// }

export default withRouter(Transactions)

