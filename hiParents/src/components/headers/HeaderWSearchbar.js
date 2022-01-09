import React, { useState } from 'react'
import { View, Text, StyleSheet,StatusBar,TouchableOpacity, Pressable, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
const HeaderWSearchbar = (props) => {
    const [showTextInput, setShowTextInput] = useState('disabled');
    return (
        <View style={props.containerStyle}>
            <StatusBar backgroundColor="transparent"
            translucent={true}
            barStyle="dark-content" />
            <View style={styles.emptyBox} />
            
           <View style={styles.box2}>

           <View style={styles.emptyBox2} />
               <Text style={{fontSize: 23, color: 'black', fontWeight: '500'}}>{props.headerTitle}</Text>
               <TouchableOpacity onPress={()=>{
                    setShowTextInput(
                        showTextInput == 'disabled' ? 'enabled'
                        : showTextInput == 'enabled' ? 'disabled': 'disabled')
                        
               }}>
                   <Icon name="search" size={26} color='#10B278'/>
               </TouchableOpacity>
                
           </View>
              {
               showTextInput == 'enabled'
               ?<View>
                   <TextInput
                   style={props.textColor}
                   placeholder="Search Here"
                   placeholderTextColor="grey"
                   onChangeText={props.changeTextKeyword}
                //    value={props.value}
                   
                   />
                </View>
               :showTextInput == 'disabled'
               ? null : null
               }  
        </View>
    )
}

export default HeaderWSearchbar

const styles = StyleSheet.create({
    emptyBox: {
        width: '100%',
        height: 56,
        // backgroundColor: 'green'
    },
    emptyBox2: {
        // height: 40,
        width:20,
        // backgroundColor: 'green'
    },
    box2:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box3: {
        // justifyContent: 'center',
        // alignSelf: 'center',
    },
    txtInput: {
        width: '98%',
        height: 40,
        alignSelf: 'center',
        // backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 5,
        borderColor:'#10B278',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        // borderTopColor: 'black',
        // borderTopWidth: 2,
        elevation: 1,
        color:'black'
    }
})