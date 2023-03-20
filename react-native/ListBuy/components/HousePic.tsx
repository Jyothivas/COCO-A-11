import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native';

type HousePicProps = {
    HousePicData: any;
    navigation: any
}

const HousePic = (props: HousePicProps) => {
    return (
        <View
            testID='HousePicView'
            style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={
                        () => props.navigation.navigate('House Images', props.HousePicData)
                    }>
                    <Image
                        testID='HouseImage'
                        style={{ height: 150, width: '100%' }}
                        source={{
                            uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + props.HousePicData?.heroImageUrl.split("/")[2]
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HousePic;
