import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, FlatList,RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import FilterByBtnWModal from '../../../components/Client list components/button/FilterBtnWModal'
import SortByBtnWModal from '../../../components/Client list components/button/SortByBtnWModal'
import ClientCard from '../../../components/Client list components/card/ClientCard'
import HeaderWSearchbar from '../../../components/headers/HeaderWSearchbar'
import * as Animatable from 'react-native-animatable';

const ClientList = (props) => {
    const [appointment, setAppointment] = useState(props.dataAppointment)
    const [sorted,setSorted] = useState()
    const [sort,setSort] = useState()
    const [filters,setFilters] = useState()
    const [filtered,setFiltered] = useState()
    const [keyword, setKeyword] = useState()
    const [refreshing, setRefreshing] = useState(false)
    // console.log(filters);
    // console.log('GETSORTEDDATA : ',props.sortedData);
    // console.log('GETFILTEREDDATA : ',props.filteredData);
    // console.log('CHECKED FILTER',props.checkedFilter)
        useEffect(() => {
        const fetchData= async() => {
          await props.getAppointment()
          if(props.dataAppointment.length > 0){
            setAppointment(props.dataAppointment)
            }
        }
        fetchData()
        }, [])

        useEffect(() => {
            setAppointment(props.dataAppointment)
        }, [props.dataAppointment])


        const onRefresh = () => {
          setAppointment([]);
          setRefreshing(true);
          props.getAppointment();
          // Simulate fetching data from the server
          setTimeout(() => {
            
            setRefreshing(false);
          }, 1200);
         
        }
    // console.log(props.dataAppointment);
// console.log(props.dataAppointment);
    const renderData = ({item}) =>
    // <Animatable.View animation="flipInX">

      <ClientCard
          animation="flipInX"
          duration={1300}
          key={item.index}
          client_name={item.child.parent.name}
          client_id={'#00'+item.child.client_id}
          child_name={item.child.name}
          appointment_status={item.appointment_status == 'Accept'?item.appointment_status+'ed':item.appointment_status}
          date={item.date_request}
          OnPress={() => props.navigation.navigate('ClientDetails',{passingDetail: item})}
          navigation={props.navigation}
          // detail={item}
      />
    // </Animatable.View>
    // const handleSort = (sorts,filters) => {
    //     setSort(sorts)
    //     setFilter(filters)
    //     // console.log('TYPE: ',type);
    //     let sortedData = []
    //     let filteredData = []
    //     // let sortedDataAsc = []
    //     if(sorts == 'Name Descending'){
    //         sortedData = props.dataAppointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() < b.child.parent?.name.toLowerCase()) ? 1 : -1)
    //         props.getSortedData(sortedData)
    //         // console.log('DESC : R',sortedData);
    //     }else if(sorts =='asc'){
    //         sortedData = props.dataAppointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() > b.child.parent?.name.toLowerCase()) ? 1 : -1)
    //         props.getSortedData(sortedData)
    //         // console.log('ASC : ',sortedData);
    //     }else if (sorts == 'Latest'){
    //         sortedData = props.dataAppointment?.sort((a, b) =>(a.date_request < b.date_request) ? 1 : -1)
    //         props.getSortedData(sortedData)
    //     }else if (sorts == 'Accepted'){
    //        sortedData = props.dataAppointment?.filter(item => item.appointment_status == 'Pending')
    //        setSorted(sortedData)
    //     }
       
    //     // console.log('SORTED DATA : ',sortedData);
        
    // }
    // console.log(keyword);
    // console.log(props.checkedFilter);
    return (
        <View style={{flex: 1}}>
            {/* HEADER */}
            <HeaderWSearchbar
                changeTextKeyword={text => setKeyword(text)}
                // value={keyword}
                containerStyle={{height: '19.2%',
                // maxHeight: '35%',
                width: '100%',
                backgroundColor: 'white',
                justifyContent: 'center',
                elevation: 8,
                // borderColor: 'black',
                borderWidth: 0.01,}}
                headerTitle="Client List"
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
            <View style={styles.modalBtnCont}>
                     <FilterByBtnWModal/>
                     <SortByBtnWModal
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
            </View>
            <View style={{width: '100%', backgroundColor: 'white', height: '6%', justifyContent: 'center', elevation: 10,borderBottomColor:'grey',borderLeftColor: 'white',borderRightColor: 'white',borderTopColor: 'grey'}}>
                    <Text style={{marginLeft: 15, fontWeight: '600', fontSize: 16, color: '#10B278'}}>
                    {   keyword && sort
                              ?`Showing result for '${keyword}'\nSort By : ${sort}`
                              :
                              keyword
                              ?
                              `Showing result for '${keyword}'`
                              :sort
                              ?`Sort By : ${sort}`
                              :'Appointment List'
                              
                          }
                    </Text>
                </View>

            <FlatList 
                data={    
                    keyword && !props.checkedFilter
                    ?
                    appointment.filter(item => item.child.name.toLowerCase().includes(keyword.toLowerCase())
                    ||
                    item.child.parent.name.toLowerCase().includes(keyword.toLowerCase()))
                    :
                    props.checkedFilter == 'Accept' && keyword
                    ?
                    appointment
                    .filter(item =>item.appointment_status == 'Accept')
                    .filter(nChild =>nChild.child.name.toLowerCase().includes(keyword.toLowerCase()) && nChild.appointment_status == 'Accept'
                    ||
                    nChild.child.parent.name.toLowerCase().includes(keyword.toLowerCase()) && nChild.appointment_status == 'Accept' )
                    :
                    props.checkedFilter == 'Pending' && keyword
                    ?
                    appointment.filter(item =>item.appointment_status == 'Pending')
                    .filter(nChild =>nChild.child.name.toLowerCase().includes(keyword.toLowerCase()) && nChild.appointment_status == 'Pending'
                    ||
                    nChild.child.parent.name.toLowerCase().includes(keyword.toLowerCase())&& nChild.appointment_status == 'Pending')
                    :
                    props.checkedFilter == 'Accept' && sort == 'Name Ascending'
                    ?
                    appointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() > b.child.parent?.name.toLowerCase()) ? 1 : -1)
                    .filter(item => item.appointment_status == 'Accept')
                    :
                    props.checkedFilter == 'Accept' && sort == 'Name Descending' 
                    ?
                    appointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() < b.child.parent?.name.toLowerCase()) ? 1 : -1)
                    .filter(item => item.appointment_status == 'Accept')
                    :
                    props.checkedFilter == 'Accept' && sort == 'Latest' 
                    ?
                    appointment.sort((a, b) =>(a.date_request < b.date_request) ? 1 : -1).filter(item => item.appointment_status == 'Accept')
                    :
                    props.checkedFilter == 'Pending' && sort == 'Name Ascending' 
                    ?
                    appointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() > b.child.parent?.name.toLowerCase()) ? 1 : -1)
                    .filter(item => item.appointment_status == 'Pending')
                    :
                    props.checkedFilter == 'Pending' && sort == 'Name Descending' 
                    ?
                    appointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() < b.child.parent?.name.toLowerCase()) ? 1 : -1)
                    .filter(item => item.appointment_status == 'Pending')
                    :
                    props.checkedFilter == 'Pending' && sort == 'Latest' 
                    ?
                    appointment.sort((a, b) =>(a.date_request < b.date_request) ? 1 : -1)
                    .filter(item => item.appointment_status == 'Pending')
                    :
                    props.checkedFilter == 'Default'
                    ?
                    appointment
                    :
                    props.checkedFilter == 'Accept'
                    ?
                    appointment.filter(item => item.appointment_status == 'Accept')
                    :
                    props.checkedFilter == 'Pending'
                    ?
                    appointment.filter(item => item.appointment_status == 'Pending')
                    :
                    sort == 'Name Descending'
                    ?
                    appointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() < b.child.parent?.name.toLowerCase()) ? 1 : -1)
                    :
                    sort == 'Name Ascending'
                    ?
                    appointment.sort((a, b) =>(a.child.parent?.name.toLowerCase() > b.child.parent?.name.toLowerCase()) ? 1 : -1)
                    :
                    sort == 'Latest'
                    ?
                    appointment.sort((a, b) =>(a.date_request < b.date_request) ? 1 : -1)
                    :
                    sort == null && !keyword && !props.checkedFilter
                    ?
                    appointment
                    :
                    appointment
                }
                renderItem={renderData}
                refreshControl={
                  <RefreshControl
                    //refresh control used for the Pull to Refresh
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

const redDisClient = dispatch => ({
    getAppointment: () => dispatch({type: 'REQ_APPOINTMENT_DATA'}),
    getSortedData: sort => dispatch({type: 'SORTED_DATA', data: sort}),
    getFilteredData: filter => dispatch ({type: 'FILTERED_DATA', data2: filter})
})

const redState = state => ({
    dataAppointment: state.clientlist.dataAppointment,
    sortedData: state.clientlist.sortedData,
    filteredData: state.clientlist.filteredData,
    checkedFilter: state.clientlist.filter
})

export default connect(redState,redDisClient)(ClientList)

const styles = StyleSheet.create({
    modalBtnCont: {
      width: '100%',
      height: '9.5%',
    //   justifyContent: 'space-around',
      backgroundColor: 'white',
      elevation: 1,
      flexDirection: 'row',
      alignItems: 'center',
    //   backgroundColor :""
      
    },
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
      optText3Pressed: {
        marginLeft: 25,
        fontSize: 22,
        fontWeight: '500',
        color: 'white'
      },
})