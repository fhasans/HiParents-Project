import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import HeaderWSearchbar from '../../components/headers/HeaderWSearchbar';
import {connect} from 'react-redux';

const Dashboard = props => {
  React.useEffect(() => {
    props.getnannys();
    props.newappointment();
    props.getclient();
  }, []);

  return (
    <View>
      <HeaderWSearchbar
        containerStyle={{
          height: '21%',
          // maxHeight: '35%',
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          elevation: 8,
          // borderColor: 'black',
          borderWidth: 0.01,
        }}
        headerTitle="Dashboard"
        textColor={{color: 'black',width: '98%',
        height: 40,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
        marginTop: 18,
        // borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#10B278',
        color:'#10B278',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        // borderTopColor: 'black',
        // borderTopWidth: 2,
        elevation: 1}}
      />

      <View style={styles.container}>
        <Pressable style={styles.viewCard}>
          <View style={styles.viewCount}>
            <Text style={styles.txtAppoint}>New Appointment</Text>
            <Text style={styles.totalAppoint}>
              {props.newAppointment.data
                ? props.newAppointment.data.count
                : 'loading'}
            </Text>
          </View>
          <View style={styles.viewImage}>
            <Image
              source={require('../../assets/image/appt.png')}
              style={styles.Image}></Image>
          </View>
        </Pressable>
        <Pressable style={styles.viewCard}>
          <View style={styles.viewCountClient}>
            <Text style={styles.txtClientNanny}>Active Client</Text>
            <Text style={styles.totalClient}>
              {props.activeclient.data
                ? props.activeclient.data.count
                : 'loading'}
            </Text>
          </View>
          <View style={styles.viewImageClient}>
            <Image
              source={require('../../assets/image/client.png')}
              style={styles.Image}></Image>
          </View>
        </Pressable>
        <Pressable style={styles.viewCard}>
          <View style={styles.viewCountClient}>
            <Text style={styles.txtClientNanny}>Active Nanny</Text>
            <Text style={styles.totalNanny}>{props.seluruhNanny}</Text>
          </View>
          <View style={styles.viewImageClient}>
            <Image
              source={require('../../assets/image/nanny.png')}
              style={styles.Image}></Image>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const reduxState = state => ({
  seluruhNanny: state.dashboard.activeNanny.activeNanny,
  newAppointment: state.dashboard.data,
  activeclient: state.dashboard.activeClient,
});

const reduxDispatch = dispatch => ({
  getnannys: () => dispatch({type: 'GET_NANNY'}),
  newappointment: () => dispatch({type: 'GET_APPOINTMENT'}),
  getclient: () => dispatch({type: 'GET_CLIENT'}),
});

export default connect(reduxState, reduxDispatch)(Dashboard);

const styles = StyleSheet.create({
  container: {
    top: '1%',
    color: '#768471',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 80,
    height: 80,
  },
  viewCard: {
    width: 300,
    height: 140,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '8%',
    marginLeft: 0,
  },
  viewCount: {
    paddingHorizontal: 20,
  },
  viewCountClient: {
    paddingHorizontal: 55,
  },
  viewImage: {
    paddingRight: 20,
  },
  viewImageClient: {
    paddingRight: 55,
  },
  txtAppoint: {
    textAlign: 'left',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#2F2F33',
    fontWeight: 'normal',
  },
  txtClientNanny: {
    textAlign: 'left',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#2F2F33',
    fontWeight: 'normal',
  },
  totalAppoint: {
    textAlign: 'left',
    fontFamily: 'Nunito-Bold',
    fontSize: 32,
    color: '#10B278',
    fontWeight: 'bold',
  },
  totalClient: {
    textAlign: 'left',
    fontFamily: 'Nunito-Bold',
    fontSize: 32,
    color: '#F67979',
    fontWeight: 'bold',
  },
  totalNanny: {
    textAlign: 'left',
    fontFamily: 'Nunito-Bold',
    fontSize: 32,
    color: '#F1B722',
    fontWeight: 'bold',
  },
});
