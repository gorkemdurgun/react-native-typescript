import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from '../reducer/reducers';
import initialState from '../store/store';

const UserProvider = ({children}: any) => {
  const store = createStore(reducers, initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default UserProvider;
