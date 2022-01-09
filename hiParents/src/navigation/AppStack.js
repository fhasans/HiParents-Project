import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import Idx from '../screens/index/Idx';
import SignIn from '../screens/index/SignIn';
import SignUp from '../screens/index/SignUp';
import Dashboard from '../screens/main/Dashboard';
import ClientList from '../screens/main/Client List/ClientList';
import NList from '../screens/main/Nanny List/NList';
import ChildAct from '../screens/main/Child Activity/ChildAct';
import More from '../screens/main/More/More';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChildDetails from '../screens/main/Child Activity/Activity Detail/ChildDetails';
import UserProf from '../screens/main/More/UserProfile';
import Notif from '../screens/main/More/Notification';
import ChangePassword from '../screens/main/More/ChangePassword';
import ClientDetails from '../screens/main/Client List/Client Details/ClientDetails';
import DetailNanny from '../screens/main/Nanny List/DetailNanny';
import ManageChild from '../components/modal/ManageChild';
import NannyList from '../screens/main/Nanny List/NList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = props => {
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setSaveToken(props.token);
  }, [props.token]);

  const [savetoken, setSaveToken] = useState();
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('TOKEN');
      if (value !== null) {
        console.log(value);
        setSaveToken(value);
        props.isSavetoken(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <Stack.Navigator screenOptions={() => ({headerShown: false})}>
      {savetoken ? (
        <>
          <Stack.Screen name="MainScreen" component={btmNav} />
          <Stack.Screen name="ChildDetails" component={ChildDetails} />
          <Stack.Screen name="ClientDetails" component={ClientDetails} />
          <Stack.Screen name="DetailNanny" component={DetailNanny} />
          <Stack.Screen name="ManageChild" component={ManageChild} />
          <Stack.Screen name="NannyList" component={NannyList} />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: 'User Profile',
            }}
            name="User Profile"
            component={UserProf}
          />
          <Stack.Screen
            options={{headerShown: true, headerTitle: 'Notif'}}
            name="Notif"
            component={Notif}
          />
          <Stack.Screen
            options={{headerShown: true, headerTitle: 'Change Password'}}
            name="Change Password"
            component={ChangePassword}
          />
        </>
        )
        :
        (
          <>
              <Stack.Screen name="Idx" component={Idx} />
              <Stack.Screen name="Login" component={SignIn} />
              <Stack.Screen name="Register" component={SignUp} />
          </>
        )
      }
      
      {/* <Stack.Screen name="Idx1" component={Idx} /> */}
    </Stack.Navigator>
  );
};

const reduxDispatch = dispatch => {
  return {
    isSavetoken: issavetoken =>
      dispatch({type: 'STORE_TOKEN', savetoken: issavetoken}),
  };
};

const reduxState = state => ({
  token: state.auth.token,
});

export default connect(reduxState, reduxDispatch)(AppStack);

const btmNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          paddingBottom: 5,
          paddingTop: 5,
          height: 50,
        },
        tabBarActiveTintColor: '#768471',
        tabBarInactiveTintColor: '#C1C1C2',
        tabBarIcon: ({size, color}) => {
          let iconName;
          if (route.name == 'Dashboard') {
            iconName = 'view-dashboard';
          } else if (route.name == 'Client List') {
            iconName = 'badge-account';
          } else if (route.name == 'Nanny List') {
            iconName = 'account-child';
          } else if (route.name == 'Child Activity') {
            iconName = 'human-female-boy';
          } else {
            iconName = 'wrap-disabled';
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Client List" component={ClientList} />
      <Tab.Screen name="Nanny List" component={NList} />
      <Tab.Screen name="Child Activity" component={ChildAct} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};
