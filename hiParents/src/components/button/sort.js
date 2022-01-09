import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';

const Sort = props => {
  const [selectedValue, setSelectedValue] = useState('sortby');
  useEffect(() => {
    if (selectedValue == 'ascending') {
      props.getNannyAscending();
    } else if (selectedValue == 'descending') {
      props.getNannyDescending();
    }
  }, [selectedValue]);
  // console.log(selectedValue);
  return (
    <View style={styles.container}>
      <Picker
        dropdownIconColor="#10B278"
        selectedValue={selectedValue}
        style={{
          width: 150,
          alignItems: 'center',
          alignSelf: 'center',
          height: 0,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          props.sortby(itemValue);
        }}>
        <Picker.Item label="Sort By" value="sortby" color="#10B278" />
        <Picker.Item label="A - Z" value="ascending" color="#10B278" />
        <Picker.Item label="Z - A" value="descending" color="#10B278" />
      </Picker>
    </View>
  );
};

const reduxState = state => ({
  nannyAscending: state.nanny.nannyListAscending,
  nannyDescending: state.nanny.nannyListDescending,
});

const reduxDispatch = dispatch => ({
  getNannyAscending: () => dispatch({type: 'GET_NANNY_ASCENDING'}),
  getNannyDescending: () => dispatch({type: 'GET_NANNY_DESCENDING'}),
  sortby: data => dispatch({type: 'SORT_BY', data}),
});

export default connect(reduxState, reduxDispatch)(Sort);

const styles = StyleSheet.create({
  container: {
    height: 55,
  },
});
