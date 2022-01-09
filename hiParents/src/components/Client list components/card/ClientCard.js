import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'
import * as Animatable from 'react-native-animatable';
const ClientCard = (props) => {
    return (
        <Animatable.View animation={props.animation} style={styles.masterContainer} duration={props.duration}>
        {/* BOX ON THE LEFT SIDE */}
        <View style={styles.childContainer1}>
            <View style={styles.childcontainer1_box1}>
                <TouchableOpacity style={styles.touchableOne} onPress={props.OnPress}>   
                    <Text style={styles.text1}>
                        {props.client_name}
                    </Text>
                </TouchableOpacity>   
            </View>
            <View style={styles.childContainer1_box2}>
                <TouchableOpacity style={styles.touchableTwo}>
                    <Text style={styles.text2}>
                      {props.client_id}
                    </Text>
                
                    <Icon name='dot-single' size={25} color="black"/>
                    <Text style={styles.text2}>
                        {props.child_name}
                    </Text>
                    <Icon name='dot-single' size={25} color="black"/>
                    <Text style={styles.text2}>
                        {props.appointment_status}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* BOX ON THE RIGHT SIDE */}
        <View style={styles.childContainer2}>
            <TouchableOpacity style={styles.touchableThree}>  
                <Text style={styles.text3}>
                      {props.date}
                </Text>
            </TouchableOpacity>
        </View>
        </Animatable.View>
)
}

export default ClientCard;


const styles = StyleSheet.create ({
masterContainer: {
backgroundColor:'white',
height: 70,
flexDirection:
'row',
justifyContent:'center',
borderBottomWidth: 1,
borderBottomColor: 'grey',
elevation: 1
},
childContainer1: {
// backgroundColor:'yellow',
height: '100%',
width: '60%',
flexDirection: 'column'
},
childcontainer1_box1: {
// backgroundColor:'red',
height: '50%',
width:'100%',
justifyContent: 'center'
},
childContainer1_box2: {
// backgroundColor:'blue',
height: '50%',
width: '100%',
alignItems: 'flex-start'
},
childContainer2: {
// backgroundColor:'yellow',
height: '100%',
width: '33%'
},
touchableOne: {
height: '100%',
width: '100%',
justifyContent: 'center'
},
touchableTwo: {
height: '100%',
width: '98%',
justifyContent: 'space-between',
flexDirection: 'row',
// backgroundColor: "green",
alignItems: 'center'
},
touchableThree: {
height: '100%',
width: '100%',
justifyContent: 'center',
alignItems: 'flex-end',
// backgroundColor: 'red'
},
text1: {
fontSize: 21.5,
fontWeight: '600',
color: 'black'
},
text2: {
marginLeft: 3,
fontSize: 14,
fontWeight: '400',
color: 'black'
},
text3: {
fontSize: 13.5,
fontWeight: '400',
color: 'black'
}
})