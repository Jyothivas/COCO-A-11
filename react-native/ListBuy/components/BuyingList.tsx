import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import jsonData from '../listings-buy-data.json';

const BuyingList = () => {

    const [jsonObject, setJsonObject] = useState()

    const getJsonData = () => {
        setJsonObject(jsonData.data.listings.data)
    }

    useEffect(() => {
        getJsonData();
    }, [])

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <FlatList testID='Buying-FlatList'
                data={jsonObject }
                renderItem={({ item  }) => {
                    return (
                        <View style={style.houseView}>
                            <Image testID='HouseImage'
                                style={style.houseImage}
                                source={{
                                    uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + item.heroImageUrl.split("/")[2]
                                }}
                            />

                            {
                                item.agents.map((agentItem: any, index: number) => {
                                    return (

                                        <Image testID='agentProfileImage'
                                            key={'agentPhotoImage' + index}
                                            style={{ height: 150, width: '100%', margin: 3 }}
                                            source={{
                                                uri: 'https://cdn.uatr.view.com.au/images/listing/55-w/' + agentItem.agentPhotoFileName
                                            }}
                                        />

                                    )
                                }
                                )
                            }

                        </View>
                    )
                }
                }
                keyExtractor={(item, index) => index.toString()
                }
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