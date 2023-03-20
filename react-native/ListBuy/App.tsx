
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import HouseCard from './components/HouseCard';
import HouseImages from './components/HouseImages';
import axios from 'axios';
import BuyingList from './components/BuyingList';


const Stack = createNativeStackNavigator();

function App() {

  const [jsonObject, setJsonObject] = useState();

  useEffect(() => {
    getJsonData();
  }, [])

  const getJsonData = async () => {

    const url = 'http://10.0.2.2:3000/data';

    try {
      const { data: { listings: { data } } } = await axios.get(url);

      return setJsonObject(data);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Buying List">
          {(props) => <HouseCard {...props} HouseData={jsonObject} />}
        </Stack.Screen>
        <Stack.Screen name="House Images">
          {(props) => <HouseImages {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{flex:1}}>
    //   <BuyingList />
    // </View>
  )
}

export default App;
