import React, { useState } from "react";
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import CheckBox from '@react-native-community/checkbox';
import { connect } from "react-redux";
 
  
export const FilterByBtnWModal = (props) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
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
                <TouchableOpacity>
                      <Text style={styles.modalHeaderText2} onPress={toggleModal}>
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
                          Filter: 
                    </Text>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: "white", elevation: 2, height: '10%', alignItems: 'center'}}>
                      <CheckBox
                      // borderColor="red"
                      // borderWidth={2}
                      tintColors="black"
                      style={{ borderWidth: 10,borderColor: "red", marginLeft: '6.5%'}}
                      disabled={false}
                      value={toggleCheckBox2?setToggleCheckBox1(false):toggleCheckBox1}
                      onValueChange={(newValue1) => {
                        props.getCheckedFilter(newValue1?'Accept':null)
                        setToggleCheckBox1(newValue1)
                      }}
                      />
                      <Text style={{color: 'black', fontSize: 25, marginLeft: '4%'}}>Accept</Text>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: "white", elevation: 2, height: '10%', alignItems: 'center'}}>
                      <CheckBox
                        // borderColor="red"
                        // borderWidth={2}
                        tintColors="black"
                        style={{borderWidth: 10,borderColor: "red", marginLeft: '6.5%'}}
                        disabled={false}
                        value={toggleCheckBox1?setToggleCheckBox2(false):toggleCheckBox2}
                        onValueChange={(newValue2) => {
                          props.getCheckedFilter(newValue2?'Pending':null)
                          setToggleCheckBox2(newValue2)}}/>
                      <Text style={{color: 'black', fontSize: 25, marginLeft: '4%'}}>Pending</Text>
                </View>
          </View>




          )
      }
      /* THIS IS A RETURN OF ButtonWModal */
      return (
          <View style={{height: '61%', width: '22%' /* ,backgroundColor: 'blue' */}}>
            {/* MODAL TRIGGER BUTTON CONTAINER */}
                {/* MODAL TRIGGER BUTTON */}
                  <TouchableOpacity 
                  style={styles.modalBtn}
                  onPress={toggleModal}>
                      <Text style={styles.modalBtnText}>
                            Filter
                      </Text>
                      {/* BOTTOM ARROW ICON */}
                      <Icon name="arrow-drop-down"
                      size={30} color='#10B278'
                      style={styles.modalBtnIcon} />
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
                <ModalHeader />
                {/* CONTENT */}
                <ModalContent getCheckedFilter={props.getCheckedFilter} />
                {/* <Button title="Hide modal" onPress={toggleModal} /> */}
              </View>
            </Modal>
          </View>
      );
}

const redDispatch = dispatch => ({
  getCheckedFilter: data => dispatch ({type: 'GET_CHECKED_FILTER', data}) 
})

export default connect(null, redDispatch)(FilterByBtnWModal);

const styles = StyleSheet.create({
  modalBtn: {
    marginLeft: '10%',
    // backgroundColor: 'red',
    flexDirection: "row",
    height: 44,
    width: '100%',
    borderRadius: 50,
    borderColor: '#10B278',
    borderWidth: 1.5,
    justifyContent: 'space-between',
    alignItems: "center",
    // marginLeft: 16,

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
    justifyContent: 'center',
  },
  opTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 25,
   color: '#10B278'
  },
  option1: {
    height: '9.2%',
    width: '100%',
    // backgroundColor: 'blue',
    // borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    justifyContent: "center",
    elevation: 2,
    backgroundColor:'white'
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
})