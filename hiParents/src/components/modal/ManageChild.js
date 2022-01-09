import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  BackHandler,
  TouchableOpacity,
  RefreshControl,
  Alert
} from 'react-native';
import Modal from 'react-native-modal';
import Add from 'react-native-vector-icons/Entypo';
import ArrowBack from 'react-native-vector-icons/MaterialIcons';
import Search from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import ChildList from '../cards/ChildList';
import CardNoChild from '../cards/CardNoChild';
import {useNavigation} from '@react-navigation/native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

const Test = (props) => {
  
  // console.log(props.route.params);
  const [dataAnak,setDataAnak] = useState(props.dataAppointment.filter(item => item.appointment_status == 'Accept' && item.is_taken == null));
  const {numChild, id, name} = props.route.params;
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [keyword, setKeyword] = useState();
  const [refreshing, setRefreshing] = useState(false)
  useEffect(() => {
    props.getNannyChild(`${id}`)
  }, [])


  const onRefresh = () => {
    setDataAnak([]);
    setRefreshing(true);
    setDataAnak(props.dataAppointment.filter(item => item.appointment_status == 'Accept' && item.is_taken == null))
    // Simulate fetching data from the server
    setTimeout(() => {
      
      setRefreshing(false);
    }, 1200);
   
  }




  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const ChildsList = props => {
    return(
          <Animatable.View animation="flipInX"
          duration={1300} style={styles.viewList}>
                      <View style={props.txtChildName}>
                        <Text style={{color: '#10B278',fontSize: 22}}>{props.childName}</Text>
                        {/* <Text>{props.appointmentid}</Text> */}
                      </View>
                        <TouchableOpacity
                        onPress={props.applyBtn}
                        style={{
                          // backgroundColor: 'blue',
                          borderWidth: 2,
                          borderColor: '#10B278',
                          borderRadius: 50,
                          width: 110,
                          height: 32,
                          alignItems :'center',
                          justifyContent: 'center'
                          }}>
                            <Text style={props.txtBtnTitle}>
                              {props.buttonTitle}
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>

    )
  }

const renderData2 = ({item}) =>
<ChildList
animation="flipInX"
duration={1300}
CHILDNAME='Name'
childname={item.child.name}
/>

  const renderData = ({item}) =>
                  <ChildsList 
                  appointmentid={item.appointment_id}
                    txtChildName={{height: 32}}
                    childName={item.child.name}
                    txtBtnTitle={{fontSize: 20, color: '#10B278'}}
                    buttonTitle='TakeCare'
                    applyBtn={()=>{
                      numChild < 5
                      ?
                      props.reqAssignChild(item.appointment_id) && props.navigation.navigate('Child Activity')
                      :
                      Alert.alert('Status: ', `You cant pick more than five kids to take care`,[
                        {
                            text: 'Ok',
                        }
                    ]);
                    }
                    }
                  />


// console.log(dataAnak);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '100%', height: '4.2%', backgroundColor: 'white'}}/>
      <View style={styles.mainView}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowBack
            name="arrow-back-ios"
            size={24}
            color="black"
          />
        </Pressable>
        <View style={styles.navigation}>
          <View style={styles.txtNannyName}>
            <Text style={styles.txtName}>{name}</Text>
          </View>
          <View style={styles.viewDetail}>
            <Text style={styles.txtId}>{'#00'+id}</Text>
            <View style={styles.round}></View>
            <Text style={styles.txtChild}>{numChild}</Text>
          </View>
        </View>
        <Pressable onPress={toggleModal}>
          <Add name="plus" size={30} color="black" />
        </Pressable>
      </View>

      <View>{numChild == 0 ? <CardNoChild /> :<View style={{
        marginTop: '6%',
        backgroundColor: "white",
        width: '90%',
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: 'column',
        elevation: 10
        }}>
          <Text style={{color: 'black', fontWeight: "bold", fontSize: 18, alignSelf: 'flex-start', paddingLeft: '6%',paddingTop: '3%'}}>Child List</Text>
          <View style={{borderBottomWidth: 2, borderBottomColor: 'black', width: '90%'}}/>
        <FlatList
        data={props.nannyChild}
        renderItem={renderData2}
        />
      </View> }</View>

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <View style={styles.modalContainer}>
            <View style={styles.navManage}>
              <Pressable onPress={toggleModal}>
                <Text style={styles.txtCancel}>Cancel</Text>
              </Pressable>
              <Text style={styles.txtManageChild}>Manage Child</Text>
              <Pressable onPress={toggleModal}>
                <Text style={styles.txtSave}>Save</Text>
              </Pressable>
            </View>
            <View style={styles.viewCheck}>
              <View style={styles.searchBar}>
                <View>
                  <Search name="search1" style={styles.icon} />
                </View>
                <TextInput
                  placeholder="Search child name"
                  style={styles.txtSearch}
                  onChangeText={text=>setKeyword(text)}
                />
              </View>
            </View>
            <View style={styles.containerList}>
              <View style={styles.viewSelect}>
                
              </View>
             

              <FlatList
                data={
                  keyword
                  ?
                  dataAnak.filter(item => item.child.name.toLowerCase().includes(keyword.toLowerCase()))
                  :
                  dataAnak
                }
                renderItem={renderData}
                refreshing={refreshing}
                    onRefresh={onRefresh}
                    size='large'
              />
            </View>
            <View style={styles.viewTxtCount}>
              <Text style={styles.txtCount}>
                {numChild+'/5'}
                
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const redDispNlist = dispatch => ({
  reqAssignChild: assignChild => dispatch ({type: 'REQ_ASSIGN_CHILD', data: assignChild}),
  getNannyChild: nannyId=> dispatch ({type: 'GET_NANNYCHILD_DATA',data: nannyId})

})

const redStateNlist = state => ({
  dataAppointment: state.clientlist.dataAppointment,
  nannyChild: state.nanny.nannyChild
})

export default connect(redStateNlist,redDispNlist)(Test);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
  },
  modalContainer: {
    right: '5%',
    top: '10%',
    width: '110%',
    height: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
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
    // textAlign: 'center',
    // left: '100%',
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
    flexDirection: 'column',
  },
  viewDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    // top: '100%',
    // left: '2%',
    // backgroundColor: 'green',
    width: 250
  },
  txtNannyName: {
    // backgroundColor: 'green',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  round: {
    backgroundColor: '#2F2F33',
    width: 5,
    height: 5,
    borderRadius: 15,
    opacity: 0.7,
    top: '3.2%',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
   backgroundColor: "white",
   height: '9%',
  //  top: '8%',
   paddingHorizontal: "5%",
   elevation: 10
  },
  addIcon: {
    fontSize: 30,
    // left: '70%',
    // marginHorizontal: '10%',
    // bottom: '70%',
    width: '10%',
  },
  backIcon: {
    fontSize: 22,
    // textAlign: 'left',
    // marginHorizontal: '10%',
    // top: '140%',
    // width: '10%',
  },
  navManage: {
    width: '100%',
    height: 65,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    elevation: 10
  },

  txtManageChild: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2F2F33',
    bottom: '8%',
  },
  txtCancel: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#768471',
    paddingLeft: '7%',
    top: '90%',
  },
  txtSave: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#768471',
    paddingRight: '10%',
    top: '-130%',
  },
  viewCheck: {
    width: '100%',
    height: '10%',
    top: '3%',
  },
  searchBar: {
    flexDirection: 'row',
    // justifyContent: 'center',
    width: '83%',
    height: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    top: '3%',
    borderWidth: 1.5,
    borderColor: '#10B278',
    left: '48%',
    borderRadius: 50,
  },
  icon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#078658',
    paddingHorizontal: '5%',
    top: '28%',
  },
  txtSearch: {
    width: 250,
    height: 50,
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    fontWeight: '700',
    color: '#C1C1C2',
    // backgroundColor:'white'
  },
  viewSelect: {
    top: '4%',
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  txtSelectAll: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#333333',
  },
  viewCheckSelect: {
    left: '80%',
    bottom: '45%',
  },
  viewTxtSelect: {
    paddingHorizontal: '5%',
    top: '23%',
  },
  containerList: {
    // left: '5%',
    // top: '5%',
    width: '82%',
    height: '60%',
    borderRadius: 10,
    // borderColor: '#D9D9D9',
    // borderWidth: 1,
  },
  viewList: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: '5%',
    paddingVertical: '1.5%',
    marginVertical: '1%',
    borderColor: '#10B278',
    borderWidth: 1.5,
   borderRadius: 50,
    // elevation: 10,
    // top: '5%',
    // left: '5%',
    backgroundColor: 'white'
  },
  viewCheckName: {
    // left: '75%',
    // bottom: '50%',
  },
  viewTxtCount: {
    // left: '80%',
    top: '8%',
  },
  txtCount: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000',
  },
});
