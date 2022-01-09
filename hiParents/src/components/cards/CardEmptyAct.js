import React from 'react'
import { View, Text,Image } from 'react-native'

const CardEmptyAct = (props) => {
    return (
        <View>
            <View style={{justifyContent: 'center', alignItems: 'center'/* , backgroundColor: 'blue' */, width: '100%', height: '60%'}}>
                    <Image style={{
                    // flex:1,
                    height: 40,
                    width:40,
                    // resizeMode: 'cover',
                    borderWidth: 1
                    }}
                    source={props.Img}
                    />
                    <Text style={{color: 'black'}}>No activity found</Text>
                    <Text style={{color: 'black'}}>Click + button to add new activity</Text>
            </View>
        </View>
    )
}

export default CardEmptyAct
