import React,{useRef} from 'react';
import { StyleSheet, Text,TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignUpComponent({navigation}) {
    const goToLogin = ()=>{
        navigation.push(("Login"))
    }
    const goToExplore = ()=>{
        navigation.push("Explore")
    }

    return (
    <View style={styles.container}>
        <Text style={styles.createAccountText}>Create&nbsp;an account</Text>
        <View>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput style={styles.input}/>  
        </View>
        <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.input}/>  
        </View>
        <View>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input}/>  
        </View>
        <TouchableOpacity style={styles.signUpBtn} onPress={goToExplore}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.alreadyHaveAccount}>
            Already have an account?<Text style={styles.signInText} onPress={goToLogin}> Sign in</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:26,
        paddingTop: 50
    },
    createAccountText:{
        fontFamily:"sans-serif",
        fontWeight:"bold",
        fontSize:29,
        color:"#4153ab",
        textAlign:"center",
        marginBottom:"10%"
    },
    signUpBtn:{
        marginTop:"7%",
        backgroundColor: "#4153ab",
        padding: 19,
        borderRadius: 10,
    },
    signUpText:{
        textAlign:"center",
        fontFamily:"sans-serif",
        fontWeight:"bold",
        fontSize:17,
        color:"#fff"
    },
    inputLabel:{
        fontFamily:"sans-serif",
        fontSize:17
    },
    input:{
        paddingVertical: 14,
        paddingHorizontal: 18,
        backgroundColor:"#e4e7f5",
        borderRadius:6,
        marginBottom:20,
        marginTop:7
    },
    signInText:{
        color:"#4153ab",
        fontWeight:"bold"
    },
    alreadyHaveAccount:{
        fontSize:20,
        marginLeft:"15%",
        marginTop:"17%",
        color:"#161617"
    }
});
