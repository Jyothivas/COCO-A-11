import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import UserData from './components/UserData';
import UserForm from './components/UserForm';

interface User {
  name: string,
  email: string
}

const App = () => {

  const [Users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    // do something with the name and email data
    console.warn('Received user data:', name, email);
    setUser([...Users, { name, email }]);
  };

  return (
    <>
    <ScrollView>
      <View testID='user-form'>
        <UserForm onAddUser={handleAddUser} />
      </View>
      <View testID='user-data'>
        <UserData onUserData={Users}/>
      </View>
    </ScrollView>
    </>
  );
}

export default App;
