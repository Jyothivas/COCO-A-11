import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function UserForm() {
    return (
        <View testID='user-form' style={style.container}>
            <Text style={style.text}>Name</Text>
            <TextInput
                style={style.input}
                placeholder='Enter your name'
            />
            <Text style={style.text}>Email</Text>
            <TextInput
                style={style.input}
                placeholder='Enter your email'
            />
            <View style={style.btn}>
                <Button title='Cancel' />
                <Button title='Add' />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        top: 50,
        margin: 15,
        padding:25,
        borderColor:'grey',
        borderWidth:1,
        borderRadius:10
    },
    text: {
        fontSize: 22,
        color:'black'
    },
    input: {
        borderColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 8,
        padding: 5,
    },
    btn:{
        top:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingVertical:8,        
    }
})

export default UserForm;