import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import t from 'tcomb-form-native';

export default function signUpComponent() {
    const Form = t.form.Form

    const User = t.struct({
        Username: t.string,
        Email: t.string,
        Password: t.string
    })
    const options = {
        fields:{
            Email:{
                error: 'Email is required'
            },
            Username:{
                error: 'Username is required'
            },
            Password:{
                error: 'Password is required'
            }
        }
    }
    return (
    <View style={styles.container}>
        <Form 
            ref={c=>this._form = c}
            type={User}
            options={options}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:15,
        paddingTop: 50
    }
});
