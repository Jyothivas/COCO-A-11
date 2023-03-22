import React from 'react'
import { Dimensions, Image, ScrollView, View, StyleSheet } from 'react-native';

type houseImagesProp = {
    houseImage:any
}
const HouseImages = (props: houseImagesProp) => {

    const { height, width } = Dimensions.get('window');

    return (
        <View style={style.images}>
            <ScrollView
            testID='sliderImages'
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {
                    props.houseImage.images.map((houseimg: any, index: number) => {
                        return (
                            <View
                                style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center' }}
                                key={'HouseImage' + index} >
                                <Image
                                    style={{ width: "95%", height: '100%' }}
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
const style = StyleSheet.create({
    images: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})

export default HouseImages;

