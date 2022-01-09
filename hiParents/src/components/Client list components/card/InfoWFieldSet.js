import React from 'react'
import { View, Text, StyleSheet, Image, Pressable,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImgPickModal from '../../modal/ImgPickModal'
import Icon from 'react-native-vector-icons/Entypo'
import OptionPopUp from '../../pop up/OptionPopUp'
const InfoWFieldSet = (props) => {
    return (
            <View style={styles.cardCont}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between', width: '100%', backgroundColor: 'transparent'}}>
                    <Text style={{color: 'black', alignSelf: 'flex-start', marginLeft: '8.1%', fontSize: 20, fontWeight: '700', marginTop:10}}>{props.cardTitle}</Text>
                    <OptionPopUp iconName={props.Name} iconSize={props.Size} iconColor={props.Color}/>
                </View>
                <View style={props.styleCard}/>
                <View style={styles.fieldSet}>
                    <Text style={styles.legend}>{props.title}</Text>
                    <ImgPickModal 
                        img={props.Img}
                        imgStyle={props.imgStyles}
                    />
                    <TouchableOpacity onPress={props.picOnPress}>
                        <Image style={props.ImageStyle}
                            source={props.Imge}
                            />
                    </TouchableOpacity>

                </View>
                {/* FIELDSET FOR CHILD NAME */}
                <View style={styles.fieldSet2}>
                    <Text style={styles.legend3}>{props.ParentName}</Text>
                    <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text}
                        placeholderTextColor={props.plcColor}
                        onChangeText={props.ChangeText}
                        defaultValue={props.namaAnak}
                        editable={props.edit}
                        ></TextInput>
                    </View>
                    {/* <Text style={{color:'black', fontSize: 18,marginLeft: 10, marginTop: 10}}>{props.cName}</Text> */}
                </View>
                <View style={styles.fieldSet2}>
                <Text style={styles.legend2}>{props.Email}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text2}
                        onChangeText={props.ChangeText2}
                        defaultValue={props.namaAnak2}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.fieldSet2}>
                <Text style={styles.legend2}>{props.Phone}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text3}
                        onChangeText={props.ChangeText3}
                        defaultValue={props.namaAnak4}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.fieldSet2}>
                <Text style={styles.legend2}>{props.Address}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text4}
                        onChangeText={props.ChangeText4}
                        defaultValue={props.namaAnak5}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.fieldSet2}>
                <Text style={styles.legend2}>{props.Job}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text5}
                        onChangeText={props.ChangeText5}
                        defaultValue={props.namaAnak6}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.fieldSet2}>
                <Text style={styles.legend7}>{props.PlaceBirth}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text6}
                        onChangeText={props.ChangeText6}
                        defaultValue={props.namaAnak7}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.fieldSet2}>
                <Text style={styles.legend2}>{props.DateBirth}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text7}
                        onChangeText={props.ChangeText7}
                        defaultValue={props.namaAnak8}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.fieldSet2}>
                <Text style={styles.legend2}>{props.Gender}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text8}
                        onChangeText={props.ChangeText8}
                        defaultValue={props.namaAnak9}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
            </View>
    )
}

export default InfoWFieldSet

const styles = StyleSheet.create({
    cardCont: {
        height: '100%',
        width: '92%',
        // backgroundColor: 'red',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 5,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    fieldSet:{
        height: 150,
        width: '85%',
        margin: 15,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D9D9D9'
    },
    legend:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: 'white'
    },
    fieldSet2:{
        height: 62,
        width: '85%',
        margin: 5,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D9D9D9'
    },
    legend2:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },
    legend3:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },
    legend4:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },
    legend5:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },
    legend6:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },
    legend7:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },
    legend8:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    }
});