import React, { useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import jsonData from '../listings-buy-data.json';

const HouseImages = () => {

    const jsondata = jsonData.data.listings.data;
    const [jsonObject] = useState(jsondata);

    return (
        <View style={{flex:1}}>
        <FlatList
            data={jsonObject.slice(0,5)}
            horizontal={true} showsHorizontalScrollIndicator={true}
            renderItem={({ item }) => {
                return (
                <ScrollView  >
                    <View style={{ flex:1,flexDirection:'row' }}>
                        {
                            item.images.map((houseimg: any, index: number) => {
                                return (
                                    <View style={{width:'100%'}}
                                        key={'HouseImage' +index}>
                                            <Text>Image</Text>
                                        <Image
                                            style={{ height: 150, width: '50%', marginTop: 5 }}
                                            source={{
                                                uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + houseimg.url.split("/")[2]
                                            }}
                                        />
                                    </View>
                                );
                            })
                        }
                    </View>
                </ScrollView>
                )
            }
            }
            keyExtractor={(item, index) => index.toString()}
        />
        </View>
    )
}
const style = StyleSheet.create({
    houseView: { flex: 1, width: '100%', flexDirection: 'row', margin: 3, justifyContent: 'center', alignItems: 'center' },
    houseImage: { height: 180, width: '100%', margin: 3 }
})
export default HouseImages;