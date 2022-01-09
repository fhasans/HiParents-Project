import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  RefreshControl
} from 'react-native';
import {connect} from 'react-redux';
import Sort from '../../../components/button/sort';
import Filter from '../../../components/button/filter';
import HeaderWSearchbar from '../../../components/headers/HeaderWSearchbar';
import * as Animatable from 'react-native-animatable';

const Item = ({id, name, phone, numChild, status}) => {
  return (

      <Animatable.View animation="flipInX"
      duration={1300} style={styles.mainView}>
        <View style={{flexDirection: 'column', width: '55%'}}>
        <Text style={styles.txtName}>{name}</Text>
        <Text style={styles.txtPhone}>{phone ? phone : '08xx-xxxx-xxxx'}</Text>
          <View style={{flexDirection: 'row', width: '35%', justifyContent: 'space-around'}}>
          <Text style={styles.txtId}>{id}</Text>
          <View style={styles.round}></View>
          <Text style={styles.txtChild}>{numChild}</Text>
        </View>
          </View>
        <View style={styles.viewId}>
          <View style={styles.viewStatus}>
            <View
              style={[
                {backgroundColor: status == 'Active' ? '#10B278' : '#F77979'},
                styles.status,
              ]}>
              <Text style={styles.txtstatus}>{status}</Text>
            </View>
          </View>
        </View>
        </Animatable.View>
 
  );
};

const Nlist = props => {
  const [keyword, setKeyword] = useState()
  const [refreshing, setRefreshing] = useState(false)
  const [dataNanny, setDataNanny] = useState()
  // console.log('DATA NANNY LIST', props.newData);
  const onRefresh = () => {
    props.getNannyList();
    setRefreshing(true);
    props.getNannyList();
    // Simulate fetching data from the server
    setTimeout(() => {
      
      setRefreshing(false);
    }, 1200);
   
  }
  React.useEffect(() => {
    props.getNannyList();
  }, []);

  React.useEffect(() => {
    filter();
  }, [props.listdescending, props.listascending, props.sort, props.sortby]);

  const filter = () => {
    let newData = [];
    if (
      props.listascending &&
      props.sortby == 'ascending' &&
      props.sort == 'active'
    ) {
      newData = props.listascending.filter(item => item.status == 'Active');
      // console.log('props listascending :', props.listascending);
      // console.log('hasil asc active', newData);
      props.getNewData(newData);
    } else if (
      props.listascending &&
      props.sortby == 'ascending' &&
      props.sort == 'inactive'
    ) {
      newData = props.listascending.filter(item => item.status == 'Inactive');
      //console.log('hasil Inactive', newData);
      props.getNewData(newData);
    } else if (
      props.listdescending &&
      props.sortby == 'descending' &&
      props.sort == 'active'
    ) {
      newData = props.listdescending.filter(item => item.status == 'Active');
      // console.log('hasil Desc Act', newData);
      props.getNewData(newData);
    } else if (
      props.listdescending &&
      props.sortby == 'descending' &&
      props.sort == 'inactive'
    ) {
      newData = props.listdescending.filter(item => item.status == 'Inactive');
      // console.log('hasil Desc Inactive', newData);
      props.getNewData(newData);
    } else {
      props.getNewData(null);
    }
  };
  const renderItem = ({item}) => (
    <Pressable
    
      onPress={() => {
        props.navigation.navigate('ManageChild', {
          numChild: item.numberOfChild,
          name: item.name,
          id: item.id,
        });
      }}>
      <Item
      
        name={item.name}
        phone={item.phone_number}
        id={item.nanny_id}
        numChild={item.numberOfChild}
        status={item.status}
      />
    </Pressable>
  );
  // console.log(props.listascending);
  // console.log(props.listdescending);

  return (
    // <SafeAreaView>
    <View style={{flex: 1}}>
      <HeaderWSearchbar
        headerTitle="Nanny List"
        changeTextKeyword={text=>setKeyword(text)}
        containerStyle={{
          height: '19.2%',
          // maxHeight: '35%',
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          elevation: 8,
          // borderColor: 'black',
          borderWidth: 0.01,
        }}
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
        color:'#10B278',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        // borderTopColor: 'black',
        // borderTopWidth: 2,
        elevation: 1}}
      />
      <View style={styles.viewFilter}>
        <View
          style={{
            marginLeft: 16,
            backgroundColor: 'white',
            height: 44,
            borderColor: '#10B278',
            borderWidth: 1.5,
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <Filter />
        </View>
        <View
          style={{
            marginLeft: 16,
            backgroundColor: 'white',
            height: 44.2,
            borderColor: '#10B278',
            borderWidth: 1.5,
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <Sort />
        </View>
      </View>
      <View style={{width: '100%', backgroundColor: 'white', height: '6%', justifyContent: 'center', elevation: 8,borderBottomColor:'grey',borderLeftColor: 'white',borderRightColor: 'white',borderTopColor: 'grey'}}>
                    <Text style={{marginLeft: 15, fontWeight: '600', fontSize: 16, color: '#10B278'}}>
                      {        keyword
                              ?
                              `Showing result for '${keyword}'`
                              :
                              `Nanny's Data`
                      }
                    </Text>
      </View>
      <View style={{alignItems: 'center', width: '100%',flex: 1,backgroundColor: 'white'}}>
      <FlatList
        data={
            
            props.newData
            ?
            props.newData
            :
            props.listNannyActive.activeNanny && props.sort == 'active' && keyword
            ?
            props.listNannyActive.activeNanny.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
            :
            props.listNannyInactive.inactiveNanny && props.sort == 'inactive' && keyword
            ?
            props.listNannyInactive.inactiveNanny.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
            :
            keyword 
            ?
            props.seluruhListData.nannies.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
            :
            props.listNannyActive.activeNanny && props.sort == 'active'
            ?
            props.listNannyActive.activeNanny
            :
            props.listNannyInactive.inactiveNanny && props.sort == 'inactive'
            ?
            props.listNannyInactive.inactiveNanny
            :
            props.seluruhListData.nannies
        }
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        size='large'
      />
      </View>
      
    </View>

    // </SafeAreaView>
  );
};

const reduxState = state => ({
  seluruhListData: state.nanny.nannyListDefault,
  listNannyActive: state.nanny.nannyListActive,
  listNannyInactive: state.nanny.nannyListInactive,
  sort: state.nanny.sort,
  sortby: state.nanny.sortby,
  listascending: state.nanny.nannyListAscending,
  listdescending: state.nanny.nannyListDescending,
  newData: state.nanny.listsortfilter,
});

const reduxDispatch = dispatch => ({
  getNannyList: () => dispatch({type: 'GET_NANNY_LIST'}),
  getNannyActive: () => dispatch({type: 'GET_NANNY_ACTIVE'}),
  getNannyInactive: () => dispatch({type: 'GET_NANNY_INACTIVE'}),
  getNewData: data => dispatch({type: 'GET_NEW_DATA', data}),
});

export default connect(reduxState, reduxDispatch)(Nlist);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewFilter: {
    flexDirection: 'row',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '9%',
  },
  mainView: {
    width: "98.4%",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    // paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent:"space-around",
    // backgroundColor: 'yellow',
  },
  icon: {
    fontSize: 17,
    color: '#768471',
    borderStyle: 'solid',
  },
  // searchBar: {
  //   fontSize: 24,
  //   width: 200,
  //   height: 40,
  //   borderBottomColor: '#D9D9D9',
  //   borderBottomWidth: 1,
  //   fontSize: 16,
  //   bottom: '55%',
  //   left: '30%',
  //   paddingLeft: 30,
  //   color: "black"
  // },
  viewStatus: {
    // top: -35,
    // backgroundColor: 'red',
    justifyContent: "center"
    
  },
  status: {
    width: 120,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center'
    //backgroundColor: '#10B278',
  },
  viewSort: {
    width: 600,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    bottom: 60,
  },
  viewMainNanny: {
    flexDirection: 'row',
  },
  txtSort: {
    color: '#2F2F33',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 20,
  },
  viewNanny: {
    width: '100%',
    height: '7.2%',
    justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 20,
    //
    // top: 10,
    backgroundColor: 'white',
  },
  txtstatus: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  txtName: {
    fontFamily: 'Nunito-Bold',
    fontSize: 21,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    paddingTop: 0,
    paddingBottom: 0,
  },
  txtPhone: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    paddingTop: 4,
  },
  txtId: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    opacity: 0.7,
    paddingTop: 2,
    // paddingRight: 20,
  },
  txtChild: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15.5,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#2F2F33',
    opacity: 0.7,
    paddingTop: 2,
    // paddingLeft: 20,
  },
  viewId: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  round: {
    backgroundColor: '#2F2F33',
    width: 10,
    height: 10,
    borderRadius: 15,
    opacity: 0.7,
    marginTop: '9.5%',
  },
  viewIcon: {
    left: '31%',
    bottom: '8%',
  },
  txtNannyList: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#2F2F33',
  },
  viewNannyList: {
    right: '40%',
    top: '30%',
  },
});
