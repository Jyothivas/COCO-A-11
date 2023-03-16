import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native';
import jsonData from '../listings-buy-data.json';

const HousePic = () => {

    const [jsonObject, setJsonObject] = useState()

    const getJsonData = () => {
        setJsonObject(jsonData.data.listings.data)
    }

    useEffect(() => {
        getJsonData();
    }, [])

    return (
        <View testID='HousePicView' style={{flex:1}}>
            <FlatList
                testID='HouseImageFlatList'
                data={jsonObject}
                renderItem={({ item }) => {
                    return (
                        <View style={{flex:1}}>
                            <Text>House</Text>
                            <Image
                                testID='HouseImage'
                                style={{height:180,width:'100%'}}
                                source={{
                                    uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + item.heroImageUrl.split("/")[2]
                                }}
                            />
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default HousePic;
