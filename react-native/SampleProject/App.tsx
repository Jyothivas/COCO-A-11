import React from 'react';
import { View } from 'react-native';
import UserData from './components/UserData';
import UserForm from './components/UserForm';

const App = () => {

  return (
    <>
      <View testID='user-form'>
        <UserForm />
      </View>
      <View testID='user-data'>
        {/* <UserData /> */}
      </View>
    </>
  );
}

export default App;
