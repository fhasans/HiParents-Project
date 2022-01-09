import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Search from 'react-native-vector-icons/AntDesign';

class SearchBar extends Component {
  state = {
    search: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View>
            <Text style={styles.txtDashboard}>Dashboard</Text>
          </View>
          <View style={styles.viewIcon}>
            <Search name="search1" style={styles.icon} />
          </View>
          <TextInput
            onChangeText={search => this.setState({search})}
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="grey"

          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 60,
    borderWidth: 2,
    borderColor: '#D9D9D9',
    elevation: 10,
  },
  mainView: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 17,
    color: '#768471',
    borderStyle: 'solid',
  },
  searchBar: {
    fontSize: 24,
    width: '45%',
    height: 40,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingLeft: 40,
    left: 90,
    top: 5,
    color: 'black'

  },
  viewIcon: {
    top: 15,
    left: 120,
  },
  txtDashboard: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#2F2F33',
    top: 12,
    left: 20,
  },
});

export default SearchBar;
