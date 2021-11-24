import {createStackNavigator} from "@react-navigation/stack"
import HomeComponent from "../components/HomeComponent"
import BooksIntroductionComponent from "../components/BooksIntroductionComponent"
import React from "react"
import SignUpComponent from "../components/SignUpComponent"
import LoginComponent from "../components/LoginComponent"
import ExploreBooksComponent from "../components/ExploreBooksComponent"

const stack = createStackNavigator()

const MyStack = ()=>{
    return (
        
    <stack.Navigator>
        <stack.Screen 
            name="Home"
            component={HomeComponent}
            options={{
                headerStyle:{
                    backgroundColor:'#4153ab'
                },
                headerTintColor:'white',
                headerTitleStyle:{
                    fontWeight:'bold',
                    marginLeft:"59%"
                }
            }}
        />
        <stack.Screen 
            name="Explore Books" 
            component={BooksIntroductionComponent}
            options={{
                headerStyle:{
                    backgroundColor:'#4153ab'
                },
                headerTintColor:'white',
                headerTitleStyle:{
                    fontWeight:'bold',
                    marginLeft:"35%"
                }
            }} 
        />
        <stack.Screen 
            name="Register" 
            component={SignUpComponent}
            options={{
                headerStyle:{
                    backgroundColor:'#4153ab'
                },
                headerTintColor:'white',
                headerTitleStyle:{
                    fontWeight:'bold',
                    marginLeft:"49%"
                }
            }} 
        />
        <stack.Screen 
            name="Login" 
            component={LoginComponent}
            options={{
                headerStyle:{
                    backgroundColor:'#4153ab'
                },
                headerTintColor:'white',
                headerTitleStyle:{
                    fontWeight:'bold',
                    marginLeft:"54%"
                }
            }} 
        />
        <stack.Screen 
            name="Explore" 
            component={ExploreBooksComponent}
            options={{
                headerStyle:{
                    backgroundColor:'#4153ab'
                },
                headerTintColor:'white',
                headerTitleStyle:{
                    fontWeight:'bold',
                    marginLeft:"51%"
                }
            }} 
        />
    </stack.Navigator>
    )
}

export default MyStack