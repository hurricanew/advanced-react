import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (Component)=>{
  const withStore = (props, {store})=>
    <Component {...props} store={store} />;
  withStore.contextTypes={
    store:PropTypes.object,
  };
  return withStore;
};
export default StoreProvider;