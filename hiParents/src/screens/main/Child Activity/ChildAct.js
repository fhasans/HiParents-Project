import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet,RefreshControl } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ButtonWModal from '../../../components/button/ButtonWModal';
import ChildActCard from '../../../components/cards/ChildActCard';
import HeaderWSearchbar from '../../../components/headers/HeaderWSearchbar';
import * as Animatable from 'react-native-animatable';
/*  tutor search pake ternary baca comment yang ada tulisan step*/
const ChildAct = (props) => {
  const [datas, setData] = useState(props.childActData)
  const [keyword, setKeyword] = useState()
  const [sort, setSort] = useState()
  const [refreshing, setRefreshing] = useState(false)
                                        //  console.log(sort);
       
    useEffect(() => {
        props.getChildAct()
    }, [])
// console.log(data.appointment.child.name);
    // console.log('THIS IS CHILD SCREEN : ',datas);
    
    useEffect(() => {
      setData(props.childActData)
  }, [props.childActData])
  const onRefresh = () => {
    setData([]);
    setRefreshing(true);
    setData(props.childActData);
    // Simulate fetching data from the server
    setRefreshing(false);
   
   
  }
    const renderData = ({item}) =>
            <ChildActCard
            animation="flipInX"
            duration={1300}
            img={props.Img}
            imgStyle={props.imgStyles}
            childname={item.appointment.child.name}
            nannyname={item.appointment.nanny.name}
            activityname={item.activity_detail}
            time={item.createdAt}
            OnPress={() => props.navigation.navigate('ChildDetails', {passingDetail: item})}/>


    return (
        <View style={{flex: 1}}>
            <HeaderWSearchbar
             changeTextKeyword={text=> setKeyword(text)} /* <==== step 2 - tangkep inputan user pake setState nya variable keyword*/
             containerStyle={{height: '19.2%',
             // maxHeight: '35%',
             width: '100%',
             backgroundColor: 'white',
             justifyContent: 'center',
             elevation: 8,
             // borderColor: 'black',
             borderWidth: 0.01,}}
            headerTitle="Child Activity"
            textColor={{color: 'black',width: '98%',
        height: 40,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
        marginTop: 18,
        // borderRadius: 12,
        borderWidth: 2.14,
        borderColor: '#10B278',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        // borderTopColor: 'black',
        // borderTopWidth: 2,
        elevation: 1}}/>
            <ButtonWModal
            optionTitle={sort?`Sort By : ${sort}`: 'Sort By :'}
            option1Style={sort=='Latest'?styles.option1Pressed:styles.option1}
            option2Style={sort=='Name Ascending'?styles.option2Pressed:styles.option2}
            option3Style={sort=='Name Descending'?styles.option3Pressed:styles.option3}
            option4Style={{backgroundColor: 'white', height: 28, width: 70,marginRight: 25, borderRadius: 50, elevation: 20, borderWidth: 2,borderColor: '#10B278'}}
            opText1={sort=='Date'?styles.opText1Pressed:props.opText1}
            opText2={sort=='Asc'?styles.opText2Pressed:props.opText2}
            opText3={sort=='Desc'?styles.opText3Pressed:props.opText3}
            opt1='Request Date'
            opt2='Name A-Z'
            opt3='Name Z-A'
            opt4='Reset'
            sortNewest={()=>setSort('Latest')}
            sortAsc={()=>setSort('Name Ascending')}
            sortDesc={()=>setSort('Name Descending')}
            sortReset={()=>setSort(null)}
            />

                <View style={{width: '100%', backgroundColor: 'white', height: '6%', justifyContent: 'center', elevation: 2,borderBottomColor:'grey', borderWidth: 1,borderLeftColor: 'white',borderRightColor: 'white',borderTopColor: 'grey'}}>
                    <Text style={{marginLeft: 15, fontWeight: '600', fontSize: 16, color: '#10B278'}}>
                          {   keyword && sort
                              ?`Showing result for '${keyword}'\nSort By : ${sort}`
                              :
                              keyword
                              ?
                              `Showing result for '${keyword}'`
                              :sort
                              ?`Sort By : ${sort}`
                              :'Activity List'
                              
                          }
                    </Text>
                </View>
           <FlatList
           data={
                keyword /* <=== step 3 - bikin kondisi di ternary. kondisi ini dibacanya "kalo variable keyword ada isi nya*/
                ?/* maka tampilkan state dari redux yang udah di filter dibawah ini */
/* cek ===>*/   datas.filter(item => item.appointment.child.name.toLowerCase().includes(keyword.toLowerCase()) || item.appointment.nanny.name.toLowerCase().includes(keyword.toLowerCase()))
                /* apa fungsi .includes() ? untuk menampilkan data sesuai apapun isi variable keyword walaupun belum selesai diketik.
                kalo gak pake fungsi .includes() bisa aja cuman masukin keyword nya harus spesifik dan gak boleh typo
                dan harus sampai selesai dulu ngetik nya baru bisa muncul result nya */
                :/* kalo kondisi gak kayak yg pertama, lanjutin kondisi lain yang dibawah */
                sort == 'Latest'
                ?
                datas.sort((a, b) =>(a.createdAt < b.createdAt) ? 1 : -1)
                :
                sort == 'Name Ascending'
                ?
                datas.sort((a,b)=>(a.appointment.child.name > b.appointment.child.name) ? 1 : -1)
                :
                sort == 'Name Descending'
                ?
                datas.sort((a,b)=>(a.appointment.child.name < b.appointment.child.name) ? 1 : -1) 
                :
                !sort
                ?
                datas
                :
                datas
            }
           renderItem={renderData}
           refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={0}
              size='large'
              
            />
          }
           />
            
            
        </View>
    )
}

const redDispChildAct = dispatch => ({
    getChildAct: () => dispatch({type: 'REQ_CHILD_ACT_DATA'})
})

const redState = state => ({
    childActData: state.childAct.childActData
})

export default connect (redState,redDispChildAct)(ChildAct);

const styles= StyleSheet.create({

    option1: {
        height: '9.2%',
        width: '100%',
        backgroundColor: 'white',
        // borderBottomWidth: 0.2,
        borderBottomColor: 'black',
        justifyContent: "center",
        elevation: 1
      },
      option1Pressed: {
        height: '9.2%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#10B278',
        borderWidth: 3,
        justifyContent: "center",
        elevation: 1
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
      option2Pressed: {
        height: '9.2%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#10B278',
        borderWidth: 3,
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
      option3Pressed: {
        height: '9.2%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#10B278',
        borderWidth: 3,
        justifyContent: "center",
        elevation: 1
      },
      optText2Pressed: {
        marginLeft: 25,
        fontSize: 22,
        fontWeight: '500',
        color: 'white'
      },
      optText4Pressed: {
        marginLeft: 25,
        fontSize: 22,
        fontWeight: '500',
        color: 'white'
      },
})