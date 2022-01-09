import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import CardWFieldSet from '../../../../../components/cards/CardWFieldSet'

const ChildInformation = (props) => {
    const imge = '../../../../../assets/image/userimagedefault/profilepic.png'
    // console.log('CHILD INFORMATION: ',props.dataAnak);
    // console.log('CHILD INFORMATION',props.detail);
    return (
        <View style={{/* justifyContent: 'center' */marginTop: '7%', flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
           <CardWFieldSet
           title={"  Photo  "}
           styleCard={{backgroundColor: '#D9D9D9', width:'85%', height:1,margin: 10}}
           childName="  Child Name  "
           cardTitle="Child Information"
           nannyName="  Nanny's Name  "
           edit={false}
           text={props.dataAnak[0]?.child.name}
           text2={props.detail.appointment.nanny.name}
           plcColor="black"
           img={{uri:props.dataAnak[0]?.child.photo}}
           imgStyle={{width: 140,height: 140}}
        //    picOnPress={()=> props.navigation.navigate('Login')}
           />
        </View>
    )
}

const redState = state => ({
    dataAnak: state.childAct.eachChildData
})

export default connect(redState,null) (ChildInformation)
