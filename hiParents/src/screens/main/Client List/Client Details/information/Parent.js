import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import InfoWFieldSet from '../../../../../components/Client list components/card/InfoWFieldSet'

const Parent = (props) => {
    console.log('PARENT: ',props.detail);
    return (
        <View style={{width: '100%', flex: 1, backgroundColor: 'transparent', alignItems: 'center'}}>
            <ScrollView style={{width: '100%'}}>
                <View style={{marginBottom: '8%', alignItems: 'center',width: '100%',height: '94%', marginTop: '8%', borderRadius: 12, backgroundColor: 'transparent'}}>
                    <InfoWFieldSet
                    //fieldset title
                    title="  Photo  " 
                    ParentName="  Parent's Name  " 
                    Email="  Email  "
                    Phone="  Phone Number  "
                    Address="  Address  "
                    Job="  Job  "
                    PlaceBirth="  Place of Birth  "
                    DateBirth="  Date of Birth  "
                    Gender="  Gender  "
                    //data
                    text={`  ${props.detail.child.parent.name}  `}
                    text2={`  ${props.detail.child.parent.email}  `}
                    text3={`  ${props.detail.child.parent.phone_number}  `}
                    text4={`  ${props.detail.child.parent.address}  `} //address
                    text5={`  ${props.detail.child.parent.job}  `} //job
                    text6={`  ${props.detail.child.parent.place_birth}  `} //place of birth
                    text7={`  ${props.detail.child.parent.date_birth}  `}// Date of Birth
                    text8={`  ${props.detail.child.parent.gender}  `} //gender
                    plcColor='black'

                    //editable status
                    edit={false}
                    //
                    ImageStyle={{width: 140,height:135}}
                    Imge={{uri:props.detail.child.parent.photo}}
                    styleCard={{borderWidth: 0.19, borderColor: 'grey', width: '85%', marginTop: '2%'}}
                    cardTitle="Parent Information"
                    />
                </View>
                </ScrollView>
            
        </View>
    )
}

export default Parent
