import React, {useState} from 'react'
import { View, Text, Button,StyleSheet,Image,TextInput,TouchableOpacity } from 'react-native'
import HeaderIndex from '../../components/headers/HeaderIndex'
import TextInputPassword from '../../components/others/TextInputPassword'
import {connect} from 'react-redux';
const SignUp = (props) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState('Nanny')

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(role);
    // console.log(register);
    return (
        <View style={styles.cont}>

            <HeaderIndex Htitle='Sign Up'/>
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
                                placeholder='Full Name'
                                placeholderTextColor="grey"
                                onChangeText={text => setName(text)}
                                />
                          </View>
                          <View style={styles.txtInput2}>
                                <TextInput
                                style={{fontSize: 18, color: 'black'}}
                                placeholder='Email Address'
                                placeholderTextColor="grey"
                                onChangeText={text => setEmail(text)}
                                />
                          </View>
                          <TextInputPassword
                          text='Password'
                          plcColor="grey"
                          ChangeText={text=> setPassword(text)}
                          />
                      <TouchableOpacity
                            style={styles.btn}
                            onPress={() =>{
                                props.register({name,email,password,role});
                                props.navigation.navigate('Login')
                                }}>
                        <Text style={styles.txt}>Sign Up</Text>
                    </TouchableOpacity >
                      </View>
                      {/* SIGN UP LINK */}
                      <View style={styles.linkCont}>
                          <Text style={{color:'black'}}>Already Have An Account? </Text>
                          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                              <Text style={{color: '#10B278'}}>Sign In</Text>
                          </TouchableOpacity>
                      </View>
            </View>
        </View>
    )
}

const redDisReg = dispatch => ({
    register: regData => dispatch({type: 'REGISTER', data: regData}),
  });
  


export default connect(null, redDisReg)(SignUp);

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
        borderBottomColor: 'grey',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        flexDirection: 'row',
        width: 350,
        marginBottom: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtInput2: {
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: 'grey',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        flexDirection: 'row',
        width: 350,
        marginBottom: 25,
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