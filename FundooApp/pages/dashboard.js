import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView
} from 'react-native';
//import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation'


export default class DashBoard extends Component {
  constructor() {
    super();

    this.state = {
      datasource: [],
      isLoading: true,
      columns: 2,
      key: 1,
      click: false,
    }

  };

  grid(event) {
    this.setState({ click: !(this.state.click) })
    let { columns, key } = this.state
    columns = columns === 2 ? 1 : 2
    this.setState({
      columns: columns,
      key: key + 1
    })
  }


  componentDidMount() {
    const url = 'http://192.168.0.204:3000/getAllNotes'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          datasource: responseJson.result,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  renderItem = ({ item }) => {
    return (
      <ScrollView style={{ backgroundColor: '#E6E6E6', borderRadius: 10, marginLeft: 5, marginTop: 5, marginRight: 5 }}>
        <TouchableOpacity >
          <View style={{ padding: 5 }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ color: 'black' }}>{item.note}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }



  render() {
    const { columns, key } = this.state
    return (
      <View style={styles.page}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Image style={styles.drawericon} source={require('../assets/images/drawer.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Search for notes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.componentDidMount()} >
            <Image style={styles.refreshicon} source={require('../assets/images/refresh.png')} ></Image>
          </TouchableOpacity>
          {
            this.state.click ?

              (<TouchableOpacity onPress={(event) => this.grid(event)}>
                <Image style={styles.gridicon} source={require('../assets/images/grid.png')} ></Image>
              </TouchableOpacity>)
              :
              (<TouchableOpacity onPress={(event) => this.grid(event)}>
                <Image style={styles.gridicon} source={require('../assets/images/list.png')} ></Image>
              </TouchableOpacity>
              )
          }
          <TouchableOpacity>
            <Image style={styles.usericon} source={require('../assets/images/user.jpg')} ></Image>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            key={key}
            data={this.state.datasource}
            renderItem={this.renderItem}
            numColumns={columns}
            keyExtractor={(item, index) => { index }}
          />
        </ScrollView>


        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('TakeNote')} >
            <Text style={{ fontSize: 18, paddingRight: 60 }}>Take a note</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/checkBox.png')}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/brush.png')}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/mike.png')}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/photo.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },

  drawericon: {
    height: 23,
    width: 23,
    marginLeft: 15
  },

  refreshicon: {
    height: 26,
    width: 26,
    marginLeft: 18
  },

  gridicon: {
    height: 23,
    width: 23,
    marginLeft: 18
  },

  usericon: {
    height: 26,
    width: 26,
    marginLeft: 18,
    borderRadius: 60
  },

  topBar: {
    borderColor: '#C1C1C1',
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    paddingTop: 8,
    paddingBottom: 8
  },

  textInput: {
    fontSize: 18,
    paddingLeft: 15
  },

  buttonText: {
    fontSize: 18,
    paddingLeft: 20
  },

  bottomBar: {
    flexDirection: 'row',
    borderColor: '#C1C1C1',
    borderWidth: 1,
    padding: 12
  },







})