import 'react-native';
import React from 'react';


import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import UserData from '../components/UserData';

const Stack = createNativeStackNavigator();

describe('App', () => {
  it('should add a new user when handleAddUser is called', () => {
    const Users =[{name:'karan',email:'karan@gmail.com'}]
    const { getByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="User Data">
          {() => <UserData onUserData={Users} />}
        </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
    }); 
  });
