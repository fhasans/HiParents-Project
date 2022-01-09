import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
const ChildList = props => {
  return (
    
     
      <Animatable.View animation={props.animation}
      duration={props.duration} style={styles.fieldSet}>
        <Text style={styles.legend}>{props.CHILDNAME}</Text>
        <Text style={styles.isiLegend}>{props.childname}</Text>
      </Animatable.View >
    
  );
};

export default ChildList;

const styles = StyleSheet.create({
  container: {
    top: '10%',
    left: '5%',
    width: '90%',
    // height: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 8,
  },
  Child: {
    width: '90%',
    height: 2,
    backgroundColor: '#D9D9D9',
    top: '110%',
    left: '5%',
  },
  txtChild: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F2F33',
    left: '7%',
    top: '60%',
  },
  fieldSet: {
    top: '1%',
    height:45,
    width: 330,
    // left: '1%',
    marginRight: '4%',
    margin: 13,
    paddingHorizontal: 10,
    paddingVertical: 12,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: "white",
    elevation: 10
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    color: 'black',
  },
  isiLegend: {
    color: 'black',
  },
});
