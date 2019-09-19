import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Account({ account }) {
  return (
    <Fragment>
      <div className="account margin-bottom-small f-item">
        <p className="heading-3"><span id="account-number">{account.accountnumber}</span> - <span className="green">{account.status.toUpperCase()}</span></p>
        <div className="account-details">
          <p className="margin-bottom-small">Balance: N{account.balance}</p>
          <p className="margin-bottom-small">Type: {account.type}</p>
          {/* <a href="" className="btn btn-blue margin-bottom-small history">Transactions</a> */}
          <Link to={`/transactions/${account.accountnumber}`} className="btn btn-blue margin-bottom-small history">Transactions</Link>
        </div>
      </div>
    </Fragment>
  )
}

Account.propTypes = {
  account: PropTypes.object.isRequired,
}

export default Account;

