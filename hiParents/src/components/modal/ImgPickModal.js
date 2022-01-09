import React, { useState } from "react";
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from "react-native";
import Modal from "react-native-modal";
import PicIcon from "react-native-vector-icons/SimpleLineIcons";
import CameraIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CardWFieldSet from "../cards/CardWFieldSet";





export const ImgPickModal = (props) => {


  const [isModalVisible, setModalVisible] = useState(false);
 
      /* MODAL FUNCTION LOGIC */
      const toggleModal = (props) => {
      setModalVisible(!isModalVisible);
      };
      /* MODAL HEADER */
      const ModalHeader = (props) => {
          return(
            <View style={styles.modalHeader}>
            {/* CANCEL BUTTON */}
                
                      <Text style={{fontSize: 15,fontWeight: '600', color: 'black', marginLeft: 25}}>
                      Add Photo
                      </Text>
                      {/* APPLY BUTTON */}
                <TouchableOpacity onPress={toggleModal}>
                      <Text style={styles.modalHeaderText}>
                            Cancel
                      </Text>
                </TouchableOpacity>
          </View>
          );
      }
    
      /* MODAL CONTENT */
      const ModalContent = (props) => {
          return (
              <View style={styles.fieldsetCont}>
                  
                        <TouchableOpacity style={{flexDirection: "row", width: '100%', borderBottomWidth: 1,borderBottomColor:'grey'}}>
                                <CameraIcon 
                                    style={{marginLeft: 23}}
                                    name="camera-plus"
                                    size={35}
                                    color="black"
                                />
                                <Text style={{color: 'black', fontSize: 25, marginLeft: 12}}>
                                        Take a picture
                                </Text>
                        </TouchableOpacity>
                  
                 
                        <TouchableOpacity onPress={props.imagePick} style={{flexDirection: "row", width: '100%',borderBottomWidth: 1,borderBottomColor:'grey' }}>
                                <PicIcon
                                
                                style={{marginLeft: 25}}
                                name="picture" size={35}
                                color="black"/>
                                <Text style={{color: 'black',fontSize: 25, marginLeft: 12}}>
                                        Choose from gallery
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
                        <Image style={props.imgStyle}
                            source={props.img}
                            />
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
                rightButton={props.rightBtn}/>
                {/* CONTENT */}
                <ModalContent imagePick={props.imagePick}/>
                {/* <Button title="Hide modal" onPress={toggleModal} /> */}
              </View>
            </Modal>
          </View>
      );
}
export default ImgPickModal;

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
    height: '22%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // marginTop: '30%',
  },
  modalHeader: {
    height: '32%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2
  },
  modalHeaderText: {
    color: '#768471',
    fontSize: 15,
    fontWeight: '500',
    marginRight: 25
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
      marginTop: 10,
    //   justifyContent: "center",
    justifyContent: 'flex-start'
  }
})