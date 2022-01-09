import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";

 
  
export const ButtonWModal = (props) => {

  const [isModalVisible, setModalVisible] = useState(false);

      /* MODAL FUNCTION LOGIC */
      const toggleModal = () => {
      setModalVisible(!isModalVisible);
      };
      /* MODAL HEADER */
      const ModalHeader = () => {
          return(
            <View style={styles.modalHeader}>
            {/* CANCEL BUTTON */}
                <TouchableOpacity onPress={toggleModal}>
                      <Text style={styles.modalHeaderText}>
                            Cancel
                      </Text>
                </TouchableOpacity>
                      <Text style={{fontSize: 24,fontWeight: '600', color: 'black'}}>
                            Sort
                      </Text>
                      {/* APPLY BUTTON */}
                <TouchableOpacity onPress={toggleModal}>
                      <Text style={styles.modalHeaderText2}>
                            Apply
                      </Text>
                </TouchableOpacity>
          </View>
          );
      }
      /* MODAL CONTENT */
      const ModalContent = (props) => {
          return (
          <View style={{flex: 1, backgroundColor: 'white'}}>{/* OPTION TITLE */}
                <View style={styles.opTitleCont}>
                    <Text style={styles.opTitle}>
                          {props.optionTitle}
                    </Text>
                    <TouchableOpacity style={props.option4Style} onPress={props.sortReset}>
                        <Text style={styles.optText4}>
                        {props.opt4}
                        </Text>
                </TouchableOpacity>
                </View>
                {/* DATE REQUEST */}
                <TouchableOpacity style={props.option1Style} onPress={props.sortNewest}>
                        <Text style={styles.optText1}>
                              {props.opt1}
                        </Text>
                </TouchableOpacity>
                {/* NAME A-Z */}
                <TouchableOpacity style={props.option2Style} onPress={props.sortAsc}>
                        <Text style={styles.optText2}>
                        {props.opt2}
                        </Text>
                </TouchableOpacity >
                {/* NAME Z-A */}
                <TouchableOpacity style={props.option3Style} onPress={props.sortDesc}>
                        <Text style={styles.optText3}>
                        {props.opt3}
                        </Text>
                </TouchableOpacity>
                
          </View>

          )
      }
      /* THIS IS A RETURN OF ButtonWModal */
      return (
          <View style={{height: '9.5%'/* ,backgroundColor: 'blue' */}}>
            {/* MODAL TRIGGER BUTTON CONTAINER */}
              <View style={styles.modalBtnCont}>
                {/* MODAL TRIGGER BUTTON */}
                  <TouchableOpacity 
                  style={styles.modalBtn}
                  onPress={toggleModal}>
                      <Text style={styles.modalBtnText}>
                            Sort by:
                      </Text>
                      {/* BOTTOM ARROW ICON */}
                      <Icon name="arrow-drop-down"
                      size={30} color='#10B278'
                      style={styles.modalBtnIcon} />
                  </TouchableOpacity>
              </View>
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
                <ModalHeader />
                {/* CONTENT */}
                <ModalContent
                optionTitle={props.optionTitle}
                option1Style={props.option1Style}
                option2Style={props.option2Style}
                option3Style={props.option3Style}
                sortNewest={props.sortNewest}
                sortAsc={props.sortAsc}
                sortDesc={props.sortDesc}
                opt1={props.opt1}
                opt2={props.opt2}
                opt3={props.opt3}
                sortReset={props.sortReset}
                option4Style={props.option4Style}
                opt4={props.opt4}
                />
                {/* <Button title="Hide modal" onPress={toggleModal} /> */}
              </View>
            </Modal>
          </View>
      );
}
export default ButtonWModal;

const styles = StyleSheet.create({
  modalBtnCont: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 1
  },
  modalBtn: {
    
    flexDirection: "row",
    height: 44,
    width: '50%',
    borderRadius: 50,
    borderColor: '#10B278',
    borderWidth: 1.5,
    justifyContent: 'space-between',
    alignItems: "center",
    marginLeft: 16,

  },modalBtnText: {
    color: '#10B278',
    fontSize: 16,
    marginLeft: 15
  },
  modalBtnIcon: {
      marginRight: 5
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
    height: '82%',
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
    color: '#10B278',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 25
  },
  modalHeaderText2: {
    color: '#10B278',
    fontSize: 20,
    fontWeight: '500',
    marginRight: 25
  },
  opTitleCont: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: 'row'
  },
  opTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 25,
    color: 'black'
  }, optText1: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
    color:'black'
  },
  optText2: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
    color: 'black'
  },
  optText3: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
    color:'black'
  }, optText1Pressed: {
    marginLeft: 25,
    fontSize: 22,
    fontWeight: '500',
    color: '#10B278'
  },
  optText4: {
    // marginRight: 25,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: '500',
    color:'#10B278'
  }
})