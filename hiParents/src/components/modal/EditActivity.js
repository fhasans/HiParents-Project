import React, { useState, useEffect} from "react";
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View,Image,TextInput } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import PlusButton from 'react-native-vector-icons/AntDesign'
import CardWFieldSet from "../cards/CardWFieldSet";
import ImgPickModal from "./ImgPickModal"
import Edit from "react-native-vector-icons/MaterialCommunityIcons";
import { launchImageLibrary } from "react-native-image-picker";

const pic = '../../assets/icon/folderIcon.png'
export const EditActivity = (props) => {
  useEffect(() => {
    props.dataAnak[0]
  }, [])
  // const [activity_detail, setActivityDetail] = useState();
  // const [time, setTime] = useState();
  // const [image, setImage] = useState();
  // const [rawImage, setRawImage] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  // console.log('DATA ANAK DI EDIT ACTIVITY', props.dataAnak);
  // const options = {
  //   title: 'Upload Images',
  //   storageOptions: {
  //     skipBackup: false,
  //     path: 'images',
  //   },
  // };
  // console.log('THIS IS RAW IMAGE',rawImage);
  // console.log(activity_detail);
  // function pickImage() {
  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancalled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Eror: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       const source = {
  //         uri: response.assets[0].uri,
  //         type: response.assets[0].type,
  //         name: response.assets[0].fileName,
  //       };

  //       setRawImage(source);
  //       setImage(response.assets[0].uri);
  //     }
  //   });
  // }
      /* MODAL FUNCTION LOGIC */
      const toggleModal = (props) => {
      setModalVisible(!isModalVisible);
      };
      /* MODAL HEADER */
      const ModalHeader = (props) => {
          return(
            <View style={styles.modalHeader}>
            {/* CANCEL BUTTON */}
                <TouchableOpacity onPress={toggleModal}>
                      <Text style={styles.modalHeaderText}>
                            {props.leftButton}
                      </Text>
                </TouchableOpacity>
                      <Text style={{fontSize: 24,fontWeight: '600', color: 'black'}}>
                      {props.headerTittle}
                      </Text>
                      {/* APPLY BUTTON */}
                <TouchableOpacity onPress={props.onSave}>
                      <Text style={styles.modalHeaderText2}>
                      {props.rightButton}
                      </Text>
                </TouchableOpacity>
          </View>
          );
      }
      /* MODAL CONTENT */
      /* THIS IS A RETURN OF ButtonWModal */
     
      return (
          <View style={{backgroundColor: 'white', height: '30%', borderTopLeftRadius: 12, borderTopRightRadius: 12, borderBottomWidth: 1, bordercolor: 'grey', marginTop: "3%"}}>  
                {/* MODAL TRIGGER BUTTON */}
                <TouchableOpacity onPress={toggleModal} style={{backgroundColor: 'white', width: '100%',height: '100%', flexDirection: 'row', borderTopLeftRadius: 12, borderTopRightRadius: 12,bordercolor: 'grey'}}>
                        <Edit name="comment-edit-outline" color="#10B278" size={30} style={{marginLeft: '4%'}}/>
                        <Text style={{color: 'black', fontSize: 24, marginLeft: 10}}>
                              Edit Activity
                        </Text>
                  </TouchableOpacity>
              {/* MODAL */}
            <Modal
            isVisible={isModalVisible}
            animationInTiming={400}
            animationOutTiming={400}
            style={styles.modalStyle}
            >
              {/* MODAL CONTENT CONTAINER */}
              <View style={styles.modalContentContainer}>
                {/* MODAL HEADER */}
                <ModalHeader 
                leftButton={props.leftBtn}
                headerTittle={props.headerTitle}
                rightButton={props.rightBtn}
                onSave={props.onSave}
                />
                {/* CONTENT */}
                <View style={styles.fieldsetCont}>
                  <View style={styles.cardCont}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between', width: '100%', backgroundColor: 'transparent'}}>
                          <Text style={{color: 'black', alignSelf: 'flex-start', marginLeft: '8%', fontSize: 20, fontWeight: '700', marginTop:10}}>{props.cardTitle}</Text>
                      </View>
                      <View style={props.styleCard}/>
                      <View style={styles.fieldSet}>
                          <Text style={styles.legend}>Photo</Text>
                          <ImgPickModal 
                          img={props.ImageEdit}
                              // img={!image?{uri:props.dataAnak[0].appointment_activities[0].photo}: {uri: image}}
                              imgStyle={props.ImageEditStyle}
                              // imgStyle={{width: 130,height: 130}}
                             imagePick={props.PickImgBtnEdit}
                              // imagePick={() => pickImage()}
                          />
                          <TouchableOpacity onPress={props.picOnPress}>
                              <Image style={props.imgStyle}
                                  source={props.img}
                                  />
                          </TouchableOpacity>

                      </View>
                      <View style={styles.fieldSet2}>
                          <Text style={styles.legend3}>Activity</Text>
                          <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                          <TextInput
                          // onFocus={keybor}
                          onSubmitEditing={this.handleEditComplete}
                              style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                              placeholder='Input activity'
                              placeholderTextColor={props.plcColor}
                              onChangeText={props.OnEditTextAct}
                              defaultValue={props.ActivityDefaultValue}
                              ></TextInput>
                          </View>
                      </View>
                      <View style={styles.fieldSet3}>
                      <Text style={styles.legend3}>Time</Text>
                      <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
                          <TextInput
                              style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
                              placeholder='Input activity time. ex:10:00'
                              onChangeText={props.OnEditTextTime}
                              defaultValue={props.TimeDefaultValue}
                              ></TextInput>
                          </View>
                      </View>
                  </View>

      {/* /* <CardWFieldSet 
        picOnPress={props.piconPress}
        title="  Photo  "
        childName="  Activity  "
      //   cardTitle="Activity 1"
        nannyName="  Time  "
        text="Activity name"
        text2="Input time example: 10:00 PM"
        ChangeTextAct={props.ChangeTextAct}
        ChangeTextTime={props.ChangeTextTime}
        valueAct={props.valueAct}
        valueTime={props.valueTime}
        Img={!image?require('../../assets/icon/folderIcon.png'): {uri: image}}
        imagePick = {() => pickImage()}
        imgStyles={!image?{width: 50,height: 50}:{width: 130,height: 130}}
      /> */}
  </View>
                {/* <Button title="Hide modal" onPress={toggleModal} /> */}
              </View>
            </Modal>
          </View>
      );
}
export default EditActivity;

const styles = StyleSheet.create({
  modalBtn: {
    marginRight: 20
  },
  modalStyle: {
    justifyContent: 'flex-end',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    // backgroundColor: 'red'
    // marginTop: '38%',
    
  },
  modalContentContainer: { 
    height: '94%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: '30%',
  },
  modalHeader: {
    height: '11%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 30
  },
  modalHeaderText: {
    color: '#768471',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 25
  },
  modalHeaderText2: {
    color: '#768471',
    fontSize: 20,
    fontWeight: '500',
    marginRight: 25
  },
  opTitleCont: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  opTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 25,
    color: '#768471'
  },
  option1: {
    height: '9.2%',
    width: '100%',
    // backgroundColor: 'blue',
    // borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    justifyContent: "center",
    elevation: 2
  },
  option2: {
    height: '9.2%',
    width: '100%',
    // backgroundColor: 'blue',
    // borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    justifyContent: "center",
    elevation: 1
  },
  option3: {
    height: '9.2%',
    width: '100%',
    // backgroundColor: 'blue',
    // borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    justifyContent: "center",
    elevation: 1
  },
  optText1: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
    color: '#768471'
  },
  optText2: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
    color: '#768471'
  },
  optText3: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
    color: '#768471'
  },
  fieldsetCont: {
      flex: 1,
      marginTop: 30,
    //   justifyContent: "center",
    alignItems: "center",
  },
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
})