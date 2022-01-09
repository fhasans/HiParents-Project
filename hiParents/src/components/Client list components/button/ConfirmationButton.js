import React, {useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import AcceptButton from 'react-native-vector-icons/Feather'
import CancelButton from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
const ConfirmationButton = (props) => {
    // console.log('CONFIRMATION BUTTON: ',props.status);
    console.log(props.navigation);
    return (
        <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <View style={{flexDirection: 'column', alignItems: 'center',marginHorizontal: 10, marginTop: 5}}>
                    <TouchableOpacity
                    onPress={()=> {
                        props.updateAppointStatus({
                            appointment_id : props.status.appointment_id,
                            appointment_status: 'Accept',
                            
                        },
                        props.navigation
                        )
                    }}
                     style={{borderColor: "#10B278", borderWidth: 2, borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <AcceptButton name="check-circle" size={30} color="#10B278"/>
                    </TouchableOpacity>
                    <Text style={{color: 'black'}}>
                        Accept
                    </Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center',marginHorizontal: 10, marginTop: 5}}>
                    <TouchableOpacity
                    onPress={()=> {
                        props.updateAppointStatus({
                            appointment_id : props.status.appointment_id,
                            appointment_status: 'Reject',
                            
                        },
                        props.navigation
                        )
                    }}
                    style={{borderColor: "#F67979", borderWidth: 2, borderRadius: 100, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <CancelButton name="closecircleo" size={30} color="#F67979"/>
                    </TouchableOpacity>
                    <Text style={{color: 'black'}}>
                        Reject
                    </Text>
            </View>
        </View>
    )
}

const redDispConfirmation = dispatch => ({
    updateAppointStatus: (updateAppointStatus,nav) =>
    dispatch({
        type: 'REQ_UPDATE_APPOINTMENT_STATUS', 
        data: updateAppointStatus,
        navigasi: nav
    })
})

const redState = state => ({
    appointmentStatus: state.clientlist.appointmentStatus
})

export default connect(redState,redDispConfirmation) (ConfirmationButton)
