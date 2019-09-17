import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAccountsByEmail } from '../../actions/accountActions';
import Account from './Account';
import SideNav from './SideNav'

const Dashboard = ({ user, fetchAccountsByEmail, loading, accounts }) => {

  useEffect(() => {
    user && fetchAccountsByEmail(user.email);
  }, [fetchAccountsByEmail]);

  return !user ? (
    // <Spinner />
    <div>Loading</div>
  ) : (
    <main>
      <div className="">
        <section className="main-section-flex">

          {/* SIDE BAR */}
          <SideNav user={user} />

          {/* User's DASHBOARD */}
          <div className="account-list">
            <h1 className="heading-1" id="h1-title">{loading ? 'loading accounts...' : 'loading stopped'}</h1>
            <div className="profile-section padding-top-small" id="accounts-container">
              {
                (accounts.length > 0) ?
                accounts.map(account => (<Account key={account.id} account={account} />))
                : 
                <div>no account yet, create an account</div>
              }
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

Dashboard.propTypes = {
  fetchAccountsByEmail: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  accounts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  accounts: state.accountReducer.accounts,
  loading: state.accountReducer.loading,
  user: state.authReducer.user,
});

export default connect(
  mapStateToProps,
  { fetchAccountsByEmail }
)(Dashboard);