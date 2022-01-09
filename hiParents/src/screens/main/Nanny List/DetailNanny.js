import React, {state, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
  Button,
} from 'react-native';
import Add from 'react-native-vector-icons/Entypo';
import ArrowBack from 'react-native-vector-icons/MaterialIcons';
import CheckChild from '../../../components/cards/CheckChild';
import ManageChild from '../../../components/modal/ManageChild';

const DetailNanny = props => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.mainView}>
        <Pressable>
          <ArrowBack name="arrow-back-ios" style={styles.backIcon} />
        </Pressable>

        <View style={styles.navigation}>
          <View>
            <Text style={styles.txtName}>Nanny's</Text>
          </View>
          <View style={styles.viewDetail}>
            <Text style={styles.txtId}>#000123</Text>
            <View style={styles.round}></View>
            <Text style={styles.txtChild}>0 Child</Text>
          </View>
        </View>
        <Pressable onPress={() => setModalVisible(true)}>
          <Add name="plus" style={styles.addIcon} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('../../../assets/image/iconfamily.png')}></Image>
        </View>
        <View style={styles.viewNoChild}>
          <Text>No child</Text>
          <Text>Click + button to manage child</Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}></Modal>
    </View>
  );
};

export default DetailNanny;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  viewNoChild: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    margin: 0,
  },
  txtName: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#2F2F33',
    textAlign: 'center',
    left: '100%',
  },
  txtId: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    opacity: 0.7,
    paddingTop: 2,
    paddingRight: 10,
  },
  txtChild: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    opacity: 0.7,
    paddingTop: 2,
    paddingLeft: 10,
  },
  navigation: {
    flexDirection: 'row',
    backgroundColor: 'green'
  },
  viewDetail: {
    flexDirection: 'row',
    top: '100%',
    left: '2%',
  },
  round: {
    backgroundColor: '#2F2F33',
    width: 5,
    height: 5,
    borderRadius: 15,
    opacity: 0.7,
    top: '7%',
  },
  mainView: {
    width: '102%',
    height: '30%',
    elevation: 5,
    right: '1%',
    bottom: '1%',
  },
  addIcon: {
    fontSize: 30,
    textAlign: 'right',
    marginHorizontal: '10%',
    bottom: '70%',
  },
  backIcon: {
    fontSize: 22,
    textAlign: 'left',
    marginHorizontal: '10%',
    top: '140%',
  },
});
