import React from 'react';
import ChatApp from '../containers/ChatApp/ChatApp';
import Dummylist from '../containers/testReducer/dummylist'

const App = () => {
  return (
    <div className="app">
      {/* <Dummylist /> */}
      <ChatApp />
    </div>
  );
};

export default App;
