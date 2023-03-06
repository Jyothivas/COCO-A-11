import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';


const UserData = () => {
   
    const userData=[
        { name: 'karan', email: 'karan@gmail.com' },
        { name: 'peter', email: 'peter@gmail.com' },
        { name: 'sam', email: 'sam@gmail.com' },
        { name: 'rahul', email: 'rahul@gmail.com' },
        { name: 'rohit', email: 'rohit@gmail.com' },
    ]
        
    return (
        <View testID="user-data">
            <View style={style.tableHeader}>
                <View style={{ flex: 1 }}>
                    <Text style={{fontSize:18,color:'black'}}>Sr.No</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{fontSize:18,color:'black'}}>Name</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{fontSize:18,color:'black'}}>Email</Text>
                </View>
                <Text>{}</Text>
            </View>
            <FlatList testID='flatlist'
                data={userData}
                renderItem={({ item, index }) =>
                    <View style={style.table}>
                        <Text style={style.rowData}>{index + 1}</Text>
                        <Text style={style.rowData}>{item.name}</Text>
                        <Text style={style.rowData}>{item.email}</Text>
                    </View>
                } />
        </View>
    );
}

const style = StyleSheet.create({

    table: {
        top: 50,
        flex: 1,
        padding: 10,     
        flexDirection:'row'  
    },
    rowData: {
        fontSize:15,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    tableHeader: {
        fontSize:20,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: 10,
        top: 50,
        margin: 10
    },
})

export default UserData;