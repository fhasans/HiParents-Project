import React, {useEffect} from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Parent from '../../../screens/main/Client List/Client Details/information/Parent';
import Child from '../../../screens/main/Client List/Client Details/information/Child';
const FirstRoute = (props) => {
// <View style={{ flex: 1, backgroundColor: '#ff4081' }} />  /* <===== DEFAULT */
    // console.log('tab PARENTS CLIENTTABVIEW : ',props.route.detail);
   return(
   <View style={{flex: 1}}>
      <Parent detail={props.route.detail}/> 
    </View>
    )
}

const SecondRoute = (props) => (
  // <View style={{ flex: 1, backgroundColor: '#673ab7' }} /> /* <==== DEFAULT */
  <View style={{flex: 1}}>
  <Child detail={props.route.detail}/>
</View>/* <==== khusus screen/components */
);


// const 

// const ThirdRoute = (props) => (
//   <Activity tabTitle="Activity"/> 
//  );
/* ^^^^^ Uncomment the code above to create new tab (step-1) ^^^^^ */

const renderScene = SceneMap({
  /* '0' */ first: FirstRoute,
  /* '1' */ second: SecondRoute,

/* ^^^^^ Uncomment the code above to create new tab (step-2) ^^^^^ */
});

  // const arraytest = [1,2,3,4,5,6]


export default function ClientTabV(props) {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes,setRoutes] = React.useState([
    { key: /* '0' */ 'first', title: 'Parent', detail: props.detail },
    { key: /* '1' */ 'second', title: 'Child', detail: props.detail },
    // { key: 'third', title: 'bebas' },
  /* ^^^^^ Uncomment the code above to create new tab (step-3) ^^^^^ */
  ]);
  // console.log(props.detail);

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
    
    // const funct = () => {
    //   const arrayEmp = []
    //   arraytest.map((item, index) => {
    //     arrayEmp.push({
    //         key: `${index}`,
    //         title: 'Child'
    //     })
    //   })
    //   setRoutes(arrayEmp);
    // }

    // useEffect(() => {
    //   console.log(arraytest);
    //   if (arraytest) {
    //     funct();
    //   }
      
    // },[])

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