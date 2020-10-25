import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './screen/HomeScreen';
import Login from './screen/Login';

function Settings() {
  return (
    <View style={{ marginTop:20 }}>
      <TextInput placeholder = "Tim kiem" style={{borderWidth: 1, width: "95%" , height: 40, marginLeft:10}} />
    </View>
  );
}


const MainStack = createDrawerNavigator();
const MainStab = createBottomTabNavigator();
function TabScreen() {
  return (
    <MainStab.Navigator>
      <MainStab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: () => <IconAntDesign name="home" size={30} />}}
      />
    <MainStab.Screen 
    name="Tim kiem" 
    component={Settings} 
    options={{tabBarIcon: () => <IconAntDesign name="search1" size={30} />}}/>
</MainStab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Tab">
  <MainStack.Screen name="Home" component={TabScreen} options={{tabBarIcon: () => <IconAntDesign name="home" size={30} />}} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
