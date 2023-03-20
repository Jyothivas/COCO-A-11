import React from 'react'
import { FlatList, Image, View } from 'react-native';

type agentImagesProp = {
    agentsImages: any
}

const AgentsPic = (props: agentImagesProp) => {
    return (
        <View style={{flex:1}}>
            <FlatList
                testID='agentsFlatList'
                data={props.agentsImages}
                horizontal
                renderItem={({ item,index }) => {
                    return (
                        <View style={{ flex: 1}}>
                            <Image
                                testID='agentProfileImage'
                                key={'agentPhotoImage' + index}
                                style={{height: 80, width: 80,margin:9 }}
                                source={{
                                    uri: 'https://cdn.uatr.view.com.au/images/listing/1000-w/' + item.agentPhotoFileName
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
export default AgentsPic;