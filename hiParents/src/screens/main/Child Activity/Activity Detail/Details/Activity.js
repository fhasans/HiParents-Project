import React,{useEffect,useState} from 'react'
import { View, Text, StyleSheet, FlatList,TouchableOpacity,Image, TextInput, Pressable } from 'react-native'
import { connect } from 'react-redux'
import CardWFieldSet from '../../../../../components/cards/CardWFieldSet'
import { launchImageLibrary } from 'react-native-image-picker'
import Modal from "react-native-modal";
import ImgPickModal from '../../../../../components/modal/ImgPickModal'
import Edit from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from 'react-native-paper'
const imge = '../../../../../assets/image/userimagedefault/profilepic.png'



const Activity = (props) => {
    useEffect(() => {
        props.dataAnak
    }, [])
    const [editButton, setEditBtn] = useState('disabled');
    const [Id, setID] = useState();
    const [deleteId, setDeleteId] = useState();
    const [deleteButton, setDeleteBtn] = useState();
    const [activity_details, setActivityDetail] = useState();
  const [times, setTime] = useState();
  const [image, setImage] = useState();
  const [rawImage, setRawImage] = useState();
//   console.log('USE STATE ACTIVITY DETAIL',Id);
  // console.log({activity_details,times,Id,rawImage});
  // console.log('THIS IS DELETED ID', deleteId);

  const options = {
        title: 'Upload Images',
        storageOptions: {
          skipBackup: false,
          path: 'images',
        },
      };
      // console.log('THIS IS RAW IMAGE',rawImage);
      function pickImage() {
        launchImageLibrary(options, response => {
          if (response.didCancel) {
            console.log('User cancalled image picker');
          } else if (response.error) {
            console.log('ImagePicker Eror: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName,
            };
    
            setRawImage(source);
            setImage(response.assets[0].uri);
          }
        });
      }
useEffect(() => {
  deleteId
}, [])
const renderData = ({item}) =>{
    // console.log('RENDERAN: ',item.id);
    return(
    <View style={styles.cardCont}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between', width: '100%', backgroundColor: 'transparent'}}>
            <Text style={{color: 'black', alignSelf: 'flex-start', marginLeft: '8%', fontSize: 20, fontWeight: '700', marginTop:10}}>Activity</Text>
            <View style={{flexDirection: 'row', marginRight: 20}}>
            <TouchableOpacity onPress={()=>{
                setEditBtn('enabled')
                setID(item.id)
                }}>
            <Text style={{color: 'blue',fontSize: 20}}>Edit  </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            setEditBtn('disabled')
            props.updateActivity({Id,activity_details,rawImage,times});
            }}>
            <Text style={{color: 'blue',fontSize: 20}}>  Save  </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{
          props.deleteActivity(item.id);
          
        }}>
            <Text style={{color: 'red',fontSize: 20}}>  Delete</Text>
        </TouchableOpacity>
        
            </View>
        </View>
        
        <View style={{borderColor: "black", borderWidth: 0.2, height: 2,width : '90%'}}/>
        <View style={styles.fieldSet}>
      <Text style={styles.legend}>Photo</Text>
      <ImgPickModal 
      img={image&& item.id == Id ? {uri: image}:{uri:item.photo}}
          // img={!image?{uri:props.dataAnak[0].appointment_activities[0].photo}: {uri: image}}
          imgStyle={{width: 130,height: 130}}
          // imgStyle={{width: 130,height: 130}}
         imagePick={() => pickImage()}
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
          style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
          placeholder='Input activity'
          placeholderTextColor={props.plcColor}
          onChangeText={text=>setActivityDetail(text)}
          defaultValue={item.activity_detail}
          editable={editButton=='enabled'?true:false}
          ></TextInput>
      </View>
  </View>
  <View style={styles.fieldSet3}>
  <Text style={styles.legend3}>Time</Text>
  <View style={{justifyContent: 'center', marginTop: 10, alignItems: 'center', height: '100%', marginTop: 20}}>
      <TextInput
      clearButtonMode='while-editing'
          style={{color: 'black', fontSize: 18, justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%'}}
          placeholder='Input activity time. ex:10:00'
          onChangeText={text=>setTime(text)}
          defaultValue={item.time?item.time:'10:00 AM'}
          editable={editButton=='enabled'?true:false}
          ></TextInput>
      </View>
  </View>
    </View>
    )}
     return (
        <View style={styles.cardContainer}>
            {/* <View> */}
             <FlatList
             data={props.dataAnak[0]?.appointment_activities}
             renderItem={renderData} 
             />
            </View>
         
       
    
    )
}
const redDispUpdateActivity = dispatch => ({
    updateActivity: updatedAct => dispatch ({type: 'REQ_UPDATE_ACTIVITY', data: updatedAct}),
    deleteActivity: deleteAct=> dispatch({type: 'REQ_DELETE_ACTIVITY', data: deleteAct})
});
const redState = state => ({
    dataAnak: state.childAct.eachChildData
});

export default connect (redState,redDispUpdateActivity) (Activity)

const styles = StyleSheet.create ({
    cardContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        // flex: 1,
        elevation: 5,
        alignItems: 'center',
        // justifyContent: 'space-evenly'
        // marginTop: '4%',
        marginBottom: 20
    },modalBtn: {
        marginRight: 20
      },
      fieldsetCont: {
          height: '24%',
          marginBottom: -20,
        //   justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
      },
      cardCont: {
        height:410,
        width: 375,
        // marginVertical: 80,
        backgroundColor: 'red',
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth:2,
        borderColor: '#D9D9D9',
        elevation: 5,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    fieldSet:{
        backgroundColor: 'white',
        height: 125,
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
