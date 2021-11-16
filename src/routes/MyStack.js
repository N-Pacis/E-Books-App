import {createStackNavigator} from "@react-navigation/stack"
import HomeComponent from "../components/HomeComponent"
import BooksIntroductionComponent from "../components/BooksIntroductionComponent"
import React from "react"

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
    </stack.Navigator>
    )
}

export default MyStack