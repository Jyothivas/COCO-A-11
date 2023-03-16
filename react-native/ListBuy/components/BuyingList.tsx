import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const BuyingList = () => {

    const [jsonObject, setJsonObject] = useState();
    const getJsonData = async () => {
        const url = 'http://192.168.220.250:3000/data';
        let response: any = await fetch(url);
        response = await response.json();
        setJsonObject(response.listings.data);
    }

    useEffect(() => {
        getJsonData();
    }, [])


    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <FlatList
                testID='Buying-FlatList'
                data={jsonObject}
                renderItem={({ item }) => {
                    return (
                        <View style={style.houseView}>
                            <Image
                                testID='HouseImage'
                                style={style.houseImage}
                                source={{
                                    uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + item.heroImageUrl.split('/')[2]
                                }}
                            />

                            {
                                item.agents.map((agentItem: any, index: number) => {
                                    return (
                                        <Image
                                            testID='agentProfileImage'
                                            key={'agentPhotoImage' + index}
                                            style={{ height: 150, width: '100%', margin: 3 }}
                                            source={{
                                                uri: 'https://cdn.uatr.view.com.au/images/listing/55-w/' + agentItem.agentPhotoFileName
                                            }}
                                        />
                                    )
                                })
                            }
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const style = StyleSheet.create({
    houseView: { flex: 1, width: '50%', flexDirection: 'row', margin: 3 },
    heading: { fontSize: 18, color: 'black' },
    houseImage: { height: 150, width: '100%', margin: 3 }

})
export default BuyingList;