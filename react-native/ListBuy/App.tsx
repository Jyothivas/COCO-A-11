
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import HouseCard from './components/HouseCard';
import HouseImages from './components/HouseImages';
import axios from 'axios';
import BuyingList from './components/BuyingList';


const Stack = createNativeStackNavigator();

function App() {

  // const [jsonObject, setJsonObject] = useState();
  // const [Images, setImages] = useState([]);
  // const navigationRef = useNavigationContainerRef();

  // useEffect(() => {
  //   getJsonData();
  // }, [])

  // const getJsonData = async () => {

  //   const url = 'http://10.0.2.2:3000/data';

  //   try{
  //     const { data: { listings: { data } } } = await axios.get(url);
  //     return setJsonObject(data);
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // }
  // const handleHouseImages = (images:[]) => {
  //   setImages(images);
  //   goToListView();
  // };

  // const goToListView = () => {
  //   navigationRef.navigate('House Images');
  // }

  return (
    // <NavigationContainer ref={navigationRef}>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Buying List">
    //       {() => <HouseCard HouseData={jsonObject} onHouseImages={handleHouseImages} />}
    //     </Stack.Screen>
    //     <Stack.Screen name="House Images">
    //       {() => <HouseImages houseImage={Images} />}
    //     </Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <BuyingList />
    </View>
  )
}

export default App;
