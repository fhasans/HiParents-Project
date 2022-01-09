import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { connect } from 'react-redux';

const ChangePassword = props => {
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmNewPassword, setConfirmNewPassword] = useState()
  const navigation = useNavigation();
 
  const confirmPasswordValidation = () => {
  if (confirmNewPassword != newPassword) {
    alert('New password didnt match')
  }else{
    props.changepassword({oldPassword,newPassword});
    setTimeout(() => {
      props.navigation.navigate('More')
      }, 3000);
    
  }
}


  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.viewfield}>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>Old Password*</Text>
            <TextInput onChangeText={text => setOldPassword(text)} placeholder="Input old password" placeholderTextColor="grey" style={{color: 'black'}}></TextInput>
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>New Password*</Text>
            <TextInput onChangeText={text => setNewPassword(text)} placeholder="Input new password" placeholderTextColor="grey" style={{color: 'black'}}></TextInput>
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>Confirm Password*</Text>
            <TextInput onChangeText={text => setConfirmNewPassword(text)} placeholder="Confirm password" placeholderTextColor="grey" style={{color: 'black'}}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.viewbtn}>
        <TouchableOpacity style={styles.btnSave} onPress={()=>{
            confirmPasswordValidation();
            
        }}>
          <Text style={styles.txtbtn}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DispatchEditPassword = dispatch => ({
  changepassword: newPasswordData => dispatch ({type: 'REQ_EDIT_PASSWORD', data: newPasswordData})
})

const redState = state => ({
  token: state.auth.token
})

export default connect(redState,DispatchEditPassword)(ChangePassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  mainView: {
    width: 375,
    borderColor: '#D3D3D3',
    elevation: 1.2,
    paddingVertical: 23,
    marginHorizontal: 17,
    marginVertical: 28,
    backgroundColor: 'white',
    borderRadius: 8
  },
  fieldSet: {
    width: 340,
    height: 60,
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    paddingTop: 10,
    borderColor: '#D9D9D9',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'normal',
    backgroundColor: '#FFFFFF',
    color: '#2F2F33',
  },
  btnSave: {
    backgroundColor: '#10B278',
    width: 370,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: -5,
  },
  txtbtn: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  viewbtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewfield: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
