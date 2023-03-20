import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

type houseDescription = {
  houseDesc: any;
}

const HouseDescription = (props: houseDescription) => {

  return (
    <View
      testID='houseDetails'
      style={{ flex: 1, padding: 8 }}>
      <Text testID='address' style={style.address}>
        {props.houseDesc.streetAddress},
        {props.houseDesc.city},
        {props.houseDesc.state}
      </Text>
      <Text testID='propertyType' style={style.detail}>
        [{props.houseDesc.propertyTypes}]
      </Text>

      <View  style={{ flex: 1 }}>
        <Text testID='price' style={style.price}>
          Price: ${props.houseDesc.priceFrom}
        </Text>
        <Text testID='parking' style={style.detail}>
          Car Parks: {props.houseDesc.carparks}
        </Text>
        <Text testID='bedroom' style={style.detail}>
          Bedrooms: {props.houseDesc.bedrooms}
        </Text>
        <Text testID='bathroom' style={style.detail}>
          Bathrooms: {props.houseDesc.bathrooms}
        </Text>
      </View>

    </View>
  )
}
const style = StyleSheet.create({
  detail: {
    color: 'black',
    fontSize: 12,
    padding: 1
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14,
    padding: 2
  },
  address: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  }
})
export default HouseDescription;