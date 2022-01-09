import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import BackButton from 'react-native-vector-icons/MaterialIcons'
import Dot from 'react-native-vector-icons/Octicons'
import ConfirmationButton from '../button/ConfirmationButton'
const ClientHeader = props => {
    // console.log(props.navigation);
    return (
        <View style={styles.masterContainer}>
              <View style={styles.emptyBox}></View>
              <View style={styles.box1}>
              <View style={styles.hdrCont}>

              <View style={{height: '100%',width: "100%", backgroundColor: "white", flexDirection: 'row'}}>

                    <TouchableOpacity style={styles.iconCont}>
                        <BackButton
                        name="keyboard-arrow-left"
                        size={40}
                        color="black"
                        onPress={props.OnPress}
                        />
                    </TouchableOpacity>
                    
                    <View style={styles.hdrTitleCont}>
                        <Text style={styles.text1}>
                                {props.detail.child.parent.name}
                        </Text>
                        <View style={styles.headerDataCont}>
                            <Text style={styles.text2}>
                                    {'#000'+props.detail.child.parent.id}
                            </Text>
                            <Dot
                            name="primitive-dot"
                            size={16}
                            color="black"
                            style={{marginTop: "3%", marginHorizontal: "30%"}}
                            />
                            <Text style={styles.text3}>
                                    {props.detail.child.name}
                            </Text>
                            
                        </View>
                        {
                      props.detail.appointment_status == 'Pending'
                      &&<View style={{paddingBottom: '20%'}}>

                          <ConfirmationButton status={props.detail} navigation={props.navigation}/>
                      </View>

                    }
                    </View>
                </View>
                    
              </View>
              
                  
              </View>
        </View>
    )
}

export default ClientHeader

const styles = StyleSheet.create({

    masterContainer: {
        width: '100%',
        height: '20%',
        top: '1.6%'
        // backgroundColor: 'green'
    },
    emptyBox: {
        // backgroundColor: 'red',
        width: '100%',
        height: '12%'
    },
    box1: {
        backgroundColor: 'brown',
        width: '100%',
        height: '100%'
    },
    hdrCont: {
        flexDirection: 'column',
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        elevation: 2
    },
    iconCont: {
        justifyContent: 'center',
        width: '30%',
        // backgroundColor: 'green', 
        height: '100%'},
    hdrTitleCont: {
        flexDirection: 'column',
        justifyContent: 'center',
        // justifyContent: "flex-start",
        width: '40%',
        backgroundColor: 'white',
        height: '100%'
    },
    box2: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        // marginTop:'10%'
    },
    text2: {
        fontSize: 18,
        color: 'grey'
    },
    text3: {
        fontSize: 18,
        color: 'grey'
    },
    headerDataCont: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        width: '100%',
        justifyContent: 'center',
        justifyContent: 'space-around'
    }
})