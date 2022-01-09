import React from 'react'
import { View, Text, StyleSheet, Image,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImgPickModal from '../modal/ImgPickModal'
import Icon from 'react-native-vector-icons/Entypo'
import OptionPopUp from '../pop up/OptionPopUp'
const CardWFieldSet = (props) => {
    // console.log('props DATA ANAK', props.dataAnak);
    return (
            <View style={styles.cardCont}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between', width: '100%', backgroundColor: 'transparent'}}>
                    <Text style={{color: 'black', alignSelf: 'flex-start', marginLeft: '8%', fontSize: 20, fontWeight: '700', marginTop:10}}>{props.cardTitle}</Text>
                    <OptionPopUp
                    //PROPS EDIT ACTIVITY
                    autoFocusAct={props.autoFocusAct}
                  autoFocusTime={props.autoFocusTime}
                    OnEditTextAct={props.OnEditTextAct}
                    OnEditTextTime={props.OnEditTextTime}
                    ImageEdit={props.ImageEdit}
                    ImageEditStyle={props.ImageEditStyle}
                    PickImgBtnEdit={props.PickImgBtnEdit}
                    TimeDefaultValue={props.TimeDefaultValue}
                    ActivityDefaultValue={props.ActivityDefaultValue}
                    onSave={props.onSave}
//===================================================================
                    iconName={props.Name}
                    iconSize={props.Size}
                    iconColor={props.Color}
                    dataAnak={props.dataAnak}/>
                </View>
                <View style={props.styleCard}/>
                <View style={styles.fieldSet}>
                    <Text style={styles.legend}>{props.title}</Text>
                    <ImgPickModal 
                        img={props.Img}
                        imgStyle={props.imgStyles}
                        imagePick={props.imagePick}
                    />
                    <TouchableOpacity onPress={props.picOnPress}>
                        <Image style={props.imgStyle}
                            source={props.img}
                            />
                    </TouchableOpacity>

                </View>
                {/* FIELDSET FOR CHILD NAME */}
                <View style={styles.fieldSet2}>
                    <Text style={styles.legend3}>{props.childName}</Text>
                    <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text}
                        placeholderTextColor={props.plcColor}
                        onChangeText={text=>props.ChangeTextAct(text)}
                        value={props.valueAct}
                        defaultValue={props.namaAnak}
                        editable={props.edit}
                        ></TextInput>
                    </View>
                </View>
                <View style={styles.fieldSet3}>
                <Text style={styles.legend3}>{props.nannyName}</Text>
                <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                    <TextInput
                        style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                        placeholder={props.text2}
                        onChangeText={text=>props.ChangeTextTime(text)}
                        value={props.valueTime}
                        defaultValue={props.namaAnak2}
                        editable={props.edit}
                        placeholderTextColor={props.plcColor}
                        ></TextInput>
                    </View>
                </View>
            </View>
    )
}

export default CardWFieldSet

const styles = StyleSheet.create({
    cardCont: {
        height: 430,
        width: 375,
        marginVertical: 10,
        // backgroundColor: 'red',
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth:2,
        borderColor: '#D9D9D9',
        elevation: 5,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    fieldSet:{
        backgroundColor: 'white',
        height: 155,
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
        backgroundColor: '#FFFFFF'
    },
    fieldSet2:{
        backgroundColor: 'white',
        height: 65,
        width: '85%',
        margin: 15,
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
    fieldSet3:{
        backgroundColor: 'white',
        height: 65,
        width: '85%',
        margin: 15,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D9D9D9'
    },
    legend3:{
        color: 'black',
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    }
});