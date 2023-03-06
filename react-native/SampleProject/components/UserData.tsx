import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

type ParentProps={
    onUserData: any
}

interface User {
    name: string,
    email: string
}
const UserData = (props:ParentProps) => {
    const [users, setUsers] = useState<User[]>([])
    const userData = [
        { name: 'karan', email: 'karan@gmail.com' },
        { name: 'peter', email: 'peter@gmail.com' },
        { name: 'sam', email: 'sam@gmail.com' },
        { name: 'rahul', email: 'rahul@gmail.com' },
        { name: 'rohit', email: 'rohit@gmail.com' },
    ]
    return (
        <ScrollView>
            <View >
                <View testID='theading' style={style.tableHeader}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, color: 'black', alignSelf: 'center' }}>Sr.No</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 18, color: 'black', alignSelf: 'center' }}>Name</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 18, color: 'black', alignSelf: 'center' }}>Email</Text>
                    </View>
                </View>

                <FlatList testID='flatlist'
                    data={props.onUserData}
                    renderItem={({ item, index }) =>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 50 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 18, color: 'black', alignSelf: 'center' }}>{index + 1}</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: 18, color: 'black', alignSelf: 'center' }}>{item.name}</Text>
                            </View>
                            <View style={{ flex: 3 }}>
                                <Text style={{ fontSize: 18, color: 'black', alignSelf: 'center' }}>{item.email}</Text>
                            </View>
                        </View>
                    } />
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({

    table: {
        top: 50,
        flex: 1,
        padding: 10,
        flexDirection: 'row'
    },
    rowData: {
        fontSize: 15,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    tableHeader: {
        fontSize: 20,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: 10,
        top: 10,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
})

export default UserData;