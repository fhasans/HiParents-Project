import React, {useState, useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image, TextInput, Pressable} from 'react-native'
import HeaderIndex from '../../components/headers/HeaderIndex'
import TextInputPassword from '../../components/others/TextInputPassword'
import { useNavigation } from '@react-navigation/core'
import {connect} from 'react-redux';
const SignIn = (props) => {
    const [email, setEmail] = useState();
    const [password, setPasssword] = useState();
    const navigation = useNavigation();
    // console.log(email);
    // console.log(password);

    const navHandler = () => {
        // const response = 
        props.login({email, password});
        // if (props.token) {
        //   navigation.navigate('MainScreen');
        // } else {
        //   navigation.navigate('Login');
        // }
      };
    
    return (
        <View style={styles.cont}>

            <HeaderIndex Htitle='Sign In'/>
            {/* FORM CONTAINER */}
            <View style={styles.formCont}>
                        {/* product logo */}
                    <View style={styles.logoCont}>
                        <Image style={styles.logo} source={require('../../assets/image/iconhparent.png')}/>
                        <Text style={styles.titleTxt}>
                        Hi-Parents
                        </Text>
                    </View>
                    {/* text input */}
                      <View>
                          <View style={styles.txtInput}>
                                <TextInput
                                style={{fontSize: 18, color: 'black'}}
                                placeholder='Email Address'
                                placeholderTextColor="grey"
                                onChangeText={text => setEmail(text)}
                                />
                          </View>
                          <TextInputPassword text='Password' plcColor="grey" ChangeText={text => setPasssword(text)}/>
                      <TouchableOpacity style={styles.btn} onPress={() => navHandler()}>
                        <Text style={styles.txt}>Sign In</Text>
                    </TouchableOpacity >
                      </View>
                      {/* SIGN UP LINK */}
                      <View style={styles.linkCont}>
                          <Text style={{color: 'black'}}>Dont Have Account? </Text>
                          <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                              <Text style={{color: '#10B278'}}>Sign Up</Text>
                          </TouchableOpacity>
                      </View>
            </View>
        </View>
    )
}

const redDispSign = dispatch => ({
    login: loginData => dispatch({type: 'LOGIN', data: loginData}),
  });
  

const redState = state => ({
    token: state.auth.token,
    isLoggedIn: state.auth.isLoggedIn,
  });
  

export default connect(redState, redDispSign)(SignIn);

const styles = StyleSheet.create ({
    cont: {
        backgroundColor: '#10B278',
    },
    logoCont: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: "100%",
        marginLeft: 40,
    },
    logo: {
        width: 28,
        height: 26,
        marginRight: 10,
    },
    formCont: {
        flexDirection: 'column',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: '100%',
        height: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btn: {
        backgroundColor: '#F67979',
        width: 350,
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        alignSelf: 'center'
    },
    txt: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    titleTxt: {
        color: '#10B278',
        fontSize: 27,
    },
    txtInput: {
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: '#2F2F33',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        flexDirection: 'row',
        width: 350,
        marginBottom: 40,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputCont: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    linkCont: {
        flexDirection: 'row'
    }
})
