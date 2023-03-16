import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const HouseImages = () => {

    const [jsonObject, setJsonObject] = useState();
    
    const getJsonData = async() => {
        const url='http://192.168.220.250:3000/data';
        let response:any = await fetch(url);
        response = await response.json();
        setJsonObject(response.listings.data)
    }

    useEffect(() => {
        getJsonData();
    }, [])
    const { height, width } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <FlatList
                    data={jsonObject}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex:1,flexDirection:'row'}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    item.images.map((houseimg: any, index: number) => {
                                        return (
                                            <View style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center'  }}
                                                key={'HouseImage' + index} >
                                                <Image
                                                    style={{ width:"90%",height:'90%'}}
                                                    source={{
                                                        uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + houseimg.url.split("/")[2]
                                                    }}
                                                />
                                                
                                            </View>
                                        );
                                    })
                                }
                                </ScrollView>
                            </View>

                        )
                    }
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

export default HouseImages;


// {
//     item.images.map((houseimg: any, index: number) => {
//         return (
//             <View style={{width:'100%'}}
//                 key={'HouseImage' +index}>
//                     <Text>Image</Text>
//                 <Image
//                     style={{ height: 150, width: '50%', marginTop: 5 }}
//                     source={{
//                         uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + houseimg.url.split("/")[2]
//                     }}
//                 />
//             </View>
//         );
//     })
// }