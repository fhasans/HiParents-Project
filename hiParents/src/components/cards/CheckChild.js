import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Pressable,
  TextInput,
} from 'react-native';
import Search from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

const CheckChild = () => {
  const [isSelected, setSelection] = useState(false);
  const [test, setTest] = useState([]);
  const [nama, setNama] = useState();

  const Data = [
    {
      id: '1',
      name: 'Yugi Muto',
    },
    {
      id: '2',
      name: 'Yugi Muto',
    },
    {
      id: '3',
      name: 'Yugi Muto',
    },
    {
      id: '4',
      name: 'Yugi Muto',
    },
    {
      id: '5',
      name: 'Yugi Muto',
    },
    {
      id: '6',
      name: 'Yugi Muto',
    },
    {
      id: '7',
      name: 'Yugi Muto',
    },
    {
      id: '8',
      name: 'Yugi Muto',
    },
    {
      id: '9',
      name: 'Yugi Muto',
    },
  ];

  const gantiCheckbox = (newValue, idx, barang) => {
    const dataBaru = [...test];
    dataBaru[idx].select = newValue;
    setTest(dataBaru);

    if (newValue) {
      setNama(barang.nama);
    }
  };

  useEffect(() => {
    Data.map((item, index) => {
      Data[index].select = false;
    });
    setTest(Data);
  }, []);

  return (
    <View style={{backgroundColor: '#FFFFFF', height: '85%', top: '15%'}}>
      <View>
        <View style={styles.container}>
          <View style={styles.navManage}>
            <Pressable>
              <Text style={styles.txtCancel}>Cancel</Text>
            </Pressable>
            <Text style={styles.txtManageChild}>Manage Child</Text>
            <Pressable>
              <Text style={styles.txtSave}>Save</Text>
            </Pressable>
          </View>
          <View style={styles.viewSearch}>
            <View>
              <Search name="search1" style={styles.icon} />
            </View>
            <TextInput
              placeholder="Search child name"
              style={styles.txtSearch}
            />
          </View>
        </View>
        <View style={styles.viewMainFlat}>
          <View style={styles.viewCheck}>
            <View style={styles.viewSelect}>
              <Text style={styles.txtSelectAll}>Select All</Text>
            </View>
            <View style={styles.viewCheckSelect}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
            </View>
          </View>
          <FlatList
            data={test}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <View style={styles.viewList}>
                  <View style={styles.viewSelect}>
                    <Text style={styles.txtName}>{item.name}</Text>
                  </View>
                  <View style={styles.viewCheckName}>
                    <CheckBox
                      value={item.select}
                      onValueChange={newValue =>
                        gantiCheckbox(newValue, index, item)
                      }
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
        <Text>4/5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    width: '100%',
    height: '80%',
    borderRadius: 20,
  },
  txtManageChild: {
    fontFamily: 'Nunito',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#2F2F33',
    bottom: '8%',
  },
  txtCancel: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#768471',
    paddingLeft: '7%',
    top: '90%',
  },
  txtSave: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'right',
    color: '#768471',
    paddingRight: '10%',
    top: '-130%',
  },
  navManage: {
    marginTop: '2%',
    width: '100%',
    height: '10%',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  icon: {
    fontSize: 15,
    color: '#078658',
    paddingHorizontal: '5%',
    top: '28%',
  },
  txtSearch: {},
  viewCheck: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
  },
  viewSearch: {
    width: '90%',
    height: '5%',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    top: '5%',
    left: '3%',
    flexDirection: 'row',
    borderRadius: 20,
  },
  txtSelectAll: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#333333',
  },
  viewCheckSelect: {
    marginLeft: '62%',
    marginTop: '-1%',
  },
  viewCheckName: {
    marginLeft: '60%',
    marginTop: '-1%',
    paddingVertical: '1%',
  },
  viewSelect: {
    marginLeft: '8%',
  },
  viewList: {
    flexDirection: 'row',
  },
  txtName: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#333333',
    paddingVertical: '2%',
  },
  viewMainFlat: {
    top: '35%',
    position: 'absolute',
    width: '100%',
    height: '45%',
  },
});

export default CheckChild;
