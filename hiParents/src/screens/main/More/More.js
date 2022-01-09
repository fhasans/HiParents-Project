import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import User from 'react-native-vector-icons/AntDesign';
import Notif from 'react-native-vector-icons/Ionicons';
import ChangePassword from 'react-native-vector-icons/Ionicons';
import SignOut from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const More = props => {
  const navigation = useNavigation();
  // console.log('NILAI TOKEN', props.token);


  return (
    <View style={styles.container}>
      <View style={styles.viewAccount}>
        <Text style={styles.txtAccount}>Account</Text>
      </View>
      <View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate('User Profile');
            }}>
            <View style={styles.viewButton}>
              <User name="user" style={styles.icon} />
              <Text style={styles.txtBtn}>User Profile</Text>
            </View>
            <MaterialIcons name="chevron-right" style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnNotif}
            onPress={() => {
              props.navigation.navigate('Notif');
            }}>
            <View style={styles.viewButton}>
              <Notif name="notifications-outline" style={styles.icon} />
              <Text style={styles.txtBtn}>Notification</Text>
            </View>
            <MaterialIcons name="chevron-right" style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnChange}
            onPress={() => {
              props.navigation.navigate('Change Password');
            }}>
            <View style={styles.viewButton}>
              <ChangePassword name="key-outline" style={styles.icon} />
              <Text style={styles.txtBtn}>Change Password</Text>
            </View>
            <MaterialIcons name="chevron-right" style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnLogout} onPress={async ()=> {
            props.delToken();
            // props.navigation.navigate('Idx');
          }}>
            <View style={styles.viewButton}>
              <SignOut name="logout" style={styles.icon} />
              <Text style={styles.txtBtn}>Sign Out</Text>
            </View>
            <MaterialIcons name="chevron-right" style={styles.arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const redDispTokenRemoval = dispatch => ({
  delToken: () => dispatch({type: 'REMOVE_TOKEN'}),
});

const redState = state => ({
  token: state.auth.token,
});


export default connect(redState, redDispTokenRemoval) (More);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#768471',
  },
  arrow: {
    fontSize: 22,
    color: '#768471',
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 17,
    color: '#768471',
    borderStyle: 'solid',
    paddingHorizontal: 10,
  },
  button: {
    height: 70,
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtAccount: {
    justifyContent: 'left',
  },
  txtBtn: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#768471',

    paddingHorizontal: 10,
  },
  btnLogout: {
    marginTop: 50,
    height: 70,
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    borderTopColor: '#D9D9D9',
    borderTopWidth: 1,
  },
  btnChange: {
    height: 70,
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
  btnNotif: {
    height: 70,
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#D9D9D9',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },
  viewAccount: {
    marginTop: 50,
    width: 420,
    paddingVertical: 10,
    shadowTop: 400,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D9D9D9',
  },
  txtAccount: {
    color: '#768471',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    paddingHorizontal: 20,
  },
});
