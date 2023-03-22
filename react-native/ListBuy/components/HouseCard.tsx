import React from "react";
import { FlatList, View, StyleSheet } from 'react-native';
import AgentsPic from "./AgentsPic";
import HouseDescription from "./HouseDescription";
import HousePic from "./HousePic";

type houseCardProps = {
    HouseData: any
    onHouseImages:any
}
const HouseCard = (props: houseCardProps) => {

    const handleHouseImages=(images:[])=>{
        props.onHouseImages(images)
    }

    return (
        <View testID="housecard" style={{ flex: 1 }}>
            <FlatList
                data={props.HouseData}
                renderItem={({ item }) => {
                    return (
                        <View style={style.maincard}>
                            <View style={{ flexDirection: 'row', width: '100%', }}>
                                <HousePic
                                    HousePicData={item}
                                    onHouseImages={handleHouseImages}
                                />
                                <HouseDescription
                                    houseDesc={item}
                                />
                            </View>
                            <View>
                                <AgentsPic
                                    agentsImages={item.agents}
                                />
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const style = StyleSheet.create({
    maincard: {
        width: '95%',
        elevation: 10,
        backgroundColor: 'white',
        margin: 2,
        alignSelf: 'center',
        padding: 5
    }
})

export default HouseCard;