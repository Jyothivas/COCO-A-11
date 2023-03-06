import React, { useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

interface User {
    name: string,
    email: string
}

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Users, setUser] = useState<User[]>([
        // { name: 'Peter', email: 'peter@gmail.com' },
        // { name: 'Rohit', email: 'rohit@gmail.com' },
        // { name: 'Danny', email: 'danny@gmail.com' },
        // { name: 'virat', email: 'virat@gmail.com' },
    ]);

    const addingUser = () => {
        setUser([...Users, { name, email }]);
        setName('');
        setEmail('');
    }

    return (
        <>
            <ScrollView>
                <View testID='user-form' style={style.container}>
                    <Text testID='name-test' style={style.text}>Name</Text>
                    <TextInput
                        style={style.input}
                        placeholder='Enter your name'
                        onChangeText={name => setName(name)}
                        value={name}
                    />
                    <Text testID='email-test' style={style.text}>Email</Text>
                    <TextInput
                        style={style.input}
                        placeholder='Enter your email'
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                    <View style={style.btn}>
                        <Button color={'grey'} title='Cancel' />
                        <Button title='Add' onPress={addingUser} />
                    </View>

                </View>
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
                        data={Users}
                        renderItem={({ item, index }) =>
                            <View style={{flex:1,flexDirection:'row',marginTop:50}}>
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
        </>
    )
}

const style = StyleSheet.create({
    container: {
        top: 50,
        margin: 15,
        padding: 25,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10
    },
    text: {
        fontSize: 22,
        color: 'black'
    },
    input: {
        borderColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 8,
        padding: 5,
    },
    btn: {
        top: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 8,
    },
    table: {
        marginTop: 25,
        flex: 1,
        padding: 10,
        flexDirection: 'row'
    },
    rowData: {
        fontSize: 16,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    tbody: {
        fontSize: 20,
        flexDirection: 'row',
        top: 50,
        padding: 10,
        borderColor: 'black',
        borderBottomWidth:1,
    },
    tableHeader: {
        fontSize: 20,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: 10,
        top: 50,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
})

export default UserForm;