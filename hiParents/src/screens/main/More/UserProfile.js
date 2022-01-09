import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

const UserProfile = props => {
  const [photo, setPhoto] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone_number, setPhoneNumber] = useState();
  const [gender, setGender] = useState();
  const [rawImage, setRawImage] = useState();

  const handleEditUser = () => {
    const dataBaru = new FormData();
    dataBaru.append('name', name);
    dataBaru.append('photo', rawImage);
    dataBaru.append('phone_number', phone_number);
    dataBaru.append('gender', gender);

    props.editUser(dataBaru, props.navigation.navigate);

    // setTimeout(() => {
    //   props.navigation.navigate('More');
    // }, 3000);
  };

  const navigation = useNavigation();

  const option = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  function pickImage() {
    launchImageLibrary(option, response => {
      if (!response.didCancel) {
        const source = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        console.log(source);
        setPhoto(response.assets[0].uri);
        setRawImage(source);
      } else {
        console.log(response);
      }
    });
  }

  React.useEffect(() => {
    props.getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.hrLine}>
          <Text style={styles.txtProfile}>Profile</Text>
        </View>
        <View style={styles.photofiedlset}>
          <Text style={styles.legend}>Photo*</Text>
          <View style={styles.viewimg}>
            <Image
              source={photo ? {uri: photo} : {uri: props.userprofile?.photo}}
              style={{width: 100, height: 100}}></Image>
            <TouchableOpacity onPress={() => pickImage()}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Name*</Text>
          <TextInput
            onChangeText={text => setName(text)}
            style={styles.txtLegend}>
            {props.userprofile?.name}
          </TextInput>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Email*</Text>
          <TextInput
            onChangeText={text => setEmail(text)}
            style={styles.txtLegend}>
            {props.userprofile?.email}
          </TextInput>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Phone*</Text>
          <TextInput
            onChangeText={text => setPhoneNumber(text)}
            style={styles.txtLegend}>
            {props.userprofile?.phone_number}
          </TextInput>
        </View>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>Gender*</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => {
              setGender(itemValue), console.log(itemValue);
            }}>
            <Picker.Item label="Male" value="male" style={styles.txtDropDown} />
            <Picker.Item
              label="Female"
              value="female"
              style={styles.txtDropDown}
            />
          </Picker>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnSave}
          onPress={() => {
            handleEditUser();
            // console.log('Ini Nama Loh', name);
          }}>
          <Text style={styles.txtBtn}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const reduxState = state => ({
  userprofile: state.moreUserProfile.userprofile,
});

const reduxDispatch = dispatch => ({
  getUser: () => dispatch({type: 'GET_USER_PROFILE'}),
  editUser: (data, navigasi) =>
    dispatch({type: 'EDIT_USER_PROFILE', data, navigasi}),
});

export default connect(reduxState, reduxDispatch)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  btnPhoto: {
    width: 150,
    height: 30,
    backgroundColor: '#10B278',
    borderRadius: 20,
  },
  fieldSet: {
    width: '90%',
    height: '10.5%',
    margin: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'normal',
    fontFamily: 'Nunito-SemiBold',
    backgroundColor: '#FFFFFF',
    color: '#2F2F33',
  },
  txtLegend: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    top: 8,
    color: 'black',
  },
  txtDropDown: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    top: 8,
    marginHorizontal: 10,
    color: 'black',
    // backgroundColor: 'white',
    height: '100%',
  },
  photofiedlset: {
    width: '90%',
    height: '25%',
    margin: 8,
    marginTop: 20,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderColor: '#D9D9D9',
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  mainView: {
    marginTop: 30,
    marginHorizontal: 15,
    width: '95%',
    height: '78%',
    borderColor: '#D9D9D9',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  btnSave: {
    backgroundColor: '#10B278',
    width: 370,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 20,
    marginHorizontal: 20,
  },
  viewimg: {
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  txtProfile: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  hrLine: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    width: '95%',
    height: 40,
    marginHorizontal: 10,
  },
});
