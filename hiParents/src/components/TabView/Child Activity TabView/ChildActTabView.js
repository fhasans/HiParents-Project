import React, {useEffect} from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ChildInformation from '../../../screens/main/Child Activity/Activity Detail/Details/ChildInformation'
import Activity from '../../../screens/main/Child Activity/Activity Detail/Details/Activity'
import { connect } from 'react-redux';
const FirstRoute = (props) => {
  // console.log('CHILD : ',props.route.detail)
  // <View style={{ flex: 1, backgroundColor: '#ff4081' }} />  /* <===== DEFAULT */
 return( <View style={{flex: 1}}>
    <ChildInformation detail={props.route.detail}/> 
  </View>)
};

const SecondRoute = (props) => (
  // <View style={{ flex: 1, backgroundColor: '#673ab7' }} /> /* <==== DEFAULT */
  <View style={{flex: 1}}>
  <Activity detail={props.route.detail}/> 
</View>/* <==== khusus screen/components */
);

// const ThirdRoute = (props) => (
//   <Activity tabTitle="Activity"/> 
//  );
/* ^^^^^ Uncomment the code above to create new tab (step-1) ^^^^^ */

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  // third: ThirdRoute
/* ^^^^^ Uncomment the code above to create new tab (step-2) ^^^^^ */
});

function TabViewExample(props) {
  // console.log('TAB VIEW CHILD: ',props);
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Child Information', detail: props.detail},
    { key: 'second', title: 'Activity',detail: props.detail },
    // { key: 'third', title: 'bebas' },
  /* ^^^^^ Uncomment the code above to create new tab (step-3) ^^^^^ */
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#768471', height: 5, borderRadius: 12, elevation: 2}} /* <===== untuk styling garis dibawah tulisan yang ada di tiap tab*/
      style={{ backgroundColor: 'white' }}
      activeColor='#768471' /* <====== warna tulisan di tab yang sedang dipilih */
      inactiveColor='black' /* <========= warna tulisan di tab yang sedang tidak dipilih */
      labelStyle={{fontWeight: '500'}}
      tabStyle={{height: 48}} /* <===== untuk styling tab (atur tinggi/warna background/width/height) */
      
    />
  );
  useEffect(() => {
    props.getAllActOfEachChild(props.detail.appointment.appointment_id)
  }, [])

  return (
    <View style={{flex: 1,}}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
   </View>
  );
}

const redDispEachChildAct = dispatch => ({
  getAllActOfEachChild: data => dispatch({type: 'REQ_ALL_ACT_FROM_EACH_CHILD', data: data}),
  
})

export default connect(null,redDispEachChildAct) (TabViewExample)