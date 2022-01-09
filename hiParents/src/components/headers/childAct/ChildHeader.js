import React,{useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BackButton from 'react-native-vector-icons/MaterialIcons'
import PlusButton from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import AddActModal from '../../'
import AddActModal from '../../modal/AddActModal'
import { connect } from 'react-redux'

const ChildHeader = (props) => {
    // console.log('CHILD HEADER',props.detail.appointment.appointment_id);
    
    return (
        <View style={styles.masterCont}>
            <View style={styles.invBox}>

            </View>
            <View style={styles.headerCont}>
                <TouchableOpacity onPress={props.OnPress}>
                    <BackButton name="keyboard-arrow-left" size={40} style={styles.backBtn} color="black"/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Activity Detail</Text>
                <AddActModal
                leftBtn="Cancel"
                headerTitle="Add Activity"
                rightBtn="Save"
                detail={props.detail}
                navigation={props.navigation}
                
                />
            </View>
            
        </View>
    )
}

// const redDAppointmentID = dispatch => ({
//     postActivity: appointment_id=> dispatch({type: 'REQ_CREATE_ACTIVITY', dataId: appointment_id})
// })

export default ChildHeader

const styles = StyleSheet.create ({
    masterCont: {
        height: '11%',
        width: '100%',
        backgroundColor: 'white'
        
    },
    invBox: {
        height: '30%',
        // backgroundColor: 'blue'
    },
    headerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70%',
        // backgroundColor: 'red'
        
    },
    backBtn: {
        marginLeft: 10
    },
    plusBtn: {
         marginRight: 20
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '500',
        color: 'black'
    }
})
