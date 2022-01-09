import React, { useState } from "react";
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import PlusButton from 'react-native-vector-icons/AntDesign'
import CardWFieldSet from "../cards/CardWFieldSet";
import Icon2 from "react-native-vector-icons/Entypo";
import Edit from "react-native-vector-icons/MaterialCommunityIcons";
import Delete from "react-native-vector-icons/MaterialCommunityIcons";
import Cancel from "react-native-vector-icons/MaterialCommunityIcons";
import EditActivity from "../modal/EditActivity";



const pic = '../../assets/icon/folderIcon.png'
export const OptionPopUp = (props) => {
  // console.log('PROPS DATA ANAK DI OPTION POP UP: ',props.dataAnak);
  const [isModalVisible, setModalVisible] = useState(false);

      /* MODAL FUNCTION LOGIC */
      const toggleModal = (props) => {
      setModalVisible(!isModalVisible);
      };
      /* MODAL HEADER */
      
      /* MODAL CONTENT */
      const ModalContent = (props) => {
          return (
              <View
              style={{
                //   justifyContent: "center",
                  backgroundColor: 'white',
                   width: '55%',
                   height: '18%',
                   bordercolor: 'grey',
                   borderWidth: 1,
                   alignSelf: "flex-end",
                   marginRight: '12%',
                   marginBottom: '50%',
                   flexDirection: 'column',
                   justifyContent: "flex-start",
                   borderRadius: 12
                   
                   }}>
                  <EditActivity 
                  leftBtn="Cancel"
                  headerTitle="Edit Activity"
                  rightBtn="Save"
                  onSave={props.onSave}
                  dataAnak={props.dataAnak}
                  OnEditTextAct={props.OnEditTextAct}
                  OnEditTextTime={props.OnEditTextTime}
                  ImageEdit={props.ImageEdit}
                  ImageEditStyle={props.ImageEditStyle}
                  PickImgBtnEdit={props.PickImgBtnEdit}
                  TimeDefaultValue={props.TimeDefaultValue}
                  ActivityDefaultValue={props.ActivityDefaultValue}
                  autoFocusAct={props.autoFocusAct}
                  autoFocusTime={props.autoFocusTime}
                  />
                  <TouchableOpacity style={{backgroundColor: 'transparent', flexDirection: 'row', height: '30%', alignItems: 'center', borderBottomWidth: 1, bordercolor: 'grey'}}>
                  
                        <Delete name="delete-forever" color="#F67979" size={30} style={{marginLeft: '4%'}}/>
                        <Text style={{color: 'black', fontSize: 24, marginLeft: 10}}>
                                    Delete Activity
                        </Text>
                  </TouchableOpacity >
                  <TouchableOpacity style={{backgroundColor: 'transparent', flexDirection: 'row', height: '30%',alignItems: 'center', borderBottomLeftRadius: 12,borderBottomRightRadius: 12}} onPress={toggleModal}>
                  <Cancel name="cancel" color="#F67979" size={25} style={{marginLeft: '5.5%'}}/>
                  <Text style={{color: 'black', fontSize: 24, marginLeft: 10}}>
                              Cancel
                        </Text>
                  </TouchableOpacity>
                  

              </View>

          )
      }
      /* THIS IS A RETURN OF ButtonWModal */
      return (
          <View>  
                {/* MODAL TRIGGER BUTTON */}
                <TouchableOpacity onPress={toggleModal}>
                            <Icon2 name={props.iconName} size={props.iconSize} color={props.iconColor} style={{marginRight:"8%"}}/>
                </TouchableOpacity>
              {/* MODAL */}
            <Modal
            backdropColor='transparent'
            isVisible={isModalVisible}
            animationInTiming={200}
            animationOutTiming={200}
            style={styles.modalStyle}
            animationIn='fadeIn'
            animationOut='fadeOut'
            >
              {/* MODAL CONTENT CONTAINER */}
              
                {/* CONTENT */}
                <ModalContent
                  dataAnak={props.dataAnak}
                  OnEditTextAct={props.OnEditTextAct}
                  OnEditTextTime={props.OnEditTextTime}
                  ImageEdit={props.ImageEdit}
                  ImageEditStyle={props.ImageEditStyle}
                  PickImgBtnEdit={props.PickImgBtnEdit}
                  TimeDefaultValue={props.TimeDefaultValue}
                  ActivityDefaultValue={props.ActivityDefaultValue}
                  onSave={props.onSave}
                  autoFocusAct={props.autoFocusAct}
                  autoFocusTime={props.autoFocusTime}
                  />
                {/* <Button title="Hide modal" onPress={toggleModal} /> */}
              
            </Modal>
          </View>
      );
}
export default OptionPopUp;

const styles = StyleSheet.create({
  modalBtn: {
    marginRight: 20
  },
  modalStyle: {
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    // backgroundColor: 'red'
    // marginTop: '38%',
    
  },
  modalContentContainer: { 
    height: '60%',
    width: '40%',
    justifyContent: "space-between",
    alignItems: 'center',
    borderRadius: 12,
    bordercolor: 'black',
    backgroundColor: 'green',
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    marginTop: '30%',
    // backgroundColor: 'green'
  },
  fieldsetCont: {
      width: 100,
      height: 100,
      marginTop: 30,
    //   justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red'
  }
})