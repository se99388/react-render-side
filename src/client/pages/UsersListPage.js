import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersList = ({ fetchUsers, users }) => {
  useEffect(() => {
    //fetch users and dispatch it to the store
    fetchUsers();
  }, []);

  return (
    <div>
      Here's a big list of users:
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { users: state.users };
}

export function loadData(store) {
  return store.dispatch(fetchUsers());
}
//mapStateToProps=>subscribe to store updates and moving state.users as a prop to UsersList,
//mapDispatchToProps or { fetchUsers } =>The return of mapDispatchToProps functions are regarded as dispatchProps. It will be merged as props to your connected component.
export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};
