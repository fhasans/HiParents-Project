import React from 'react'
import { View, Text } from 'react-native'
import ClientHeader from '../../../../components/Client list components/headers/ClientHeader'
import ClientTabV from '../../../../components/Client list components/tabview/ClientTabV'

const ClientDetails = (props) => {
    // console.log(props.route.params.passingDetail);
    return (
        <View style={{flex: 1}}>
            <ClientHeader
            navigation={props.navigation}
            OnPress={()=>props.navigation.navigate('Client List')}
            detail={props.route.params.passingDetail}/>
            <ClientTabV detail={props.route.params.passingDetail}/>
        </View>
    )
}

export default ClientDetails
