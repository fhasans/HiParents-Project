import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';

const Filter = props => {
  const [selectedValue, setSelectedValue] = useState('status');

  useEffect(() => {
    if (selectedValue == 'active') {
      props.getNannyActive();
      // console.log(selectedValue);
    } else if (selectedValue == 'inactive') {
      props.getNannyInactive();
    }
  }, [selectedValue]);
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
          props.filterby(itemValue);
        }}>
        <Picker.Item label="Status" value="status" style={{color: '#10B278'}} />
        <Picker.Item label="Active" value="active" style={{color: '#10B278'}} />
        <Picker.Item
          label="Inactive"
          value="inactive"
          style={{color: '#10B278'}}
        />
      </Picker>
    </View>
  );
};

const reduxState = state => ({
  seluruhListData: state.nanny.nannyListDefault,
  listNannyActive: state.nanny.nannyListActive,
  listNannyInactive: state.nanny.nannyListInactive,
});

const reduxDispatch = dispatch => ({
  getNannyList: () => dispatch({type: 'GET_NANNY_LIST'}),
  getNannyActive: () => dispatch({type: 'GET_NANNY_ACTIVE'}),
  getNannyInactive: () => dispatch({type: 'GET_NANNY_INACTIVE'}),
  filterby: data => dispatch({type: 'UPDATE_SORT', data}),
});

export default connect(reduxState, reduxDispatch)(Filter);

const styles = StyleSheet.create({
  container: {
    height: 55,
  },
});
