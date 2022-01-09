import React from 'react'
import { View, Text } from 'react-native'
import ChildHeader from '../../../../components/headers/childAct/ChildHeader'
import ChildACtTabView from '../../../../components/TabView/Child Activity TabView/ChildActTabView'
const ChildDetails = (props) => {
    // console.log('CHILD DETAILS : ',props.route.params);
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
              <ChildHeader detail={props.route.params.passingDetail} OnPress= {() => props.navigation.navigate('Child Activity')}/>
                    <ChildACtTabView detail={props.route.params.passingDetail}/>
              
        </View>
    )
}

export default ChildDetails
