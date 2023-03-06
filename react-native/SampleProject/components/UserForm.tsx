import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface User {
    name: string,
    email: string
}

interface ChildProps {
    onAddUser: (name: string, email: string) => void;
}

const UserForm = (props: ChildProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Users, setUser] = useState<User[]>([]);

    const addingUser = () => {
        setUser([...Users, { name, email }]);
        setName('');
        setEmail('');
        props.onAddUser(name, email);
    }
    return (
        <>
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
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        top: 50,
        marginBottom: 55,
        padding: 25,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
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
        flex: 1
    },
})

export default UserForm;