import React, { Component } from "react";
import MyAppRouter from '../../router';
import {  
  StyleSheet,
  Text,
  Button,
  FlatList,
  Image,
  View
} from 'react-native';
import { connect } from 'react-redux';
import {doLogin} from '../../redux/actions';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.welcome}>
            React Native App Model
          </Text>
          <Text style={styles.instructions}>
            Some Features:
          </Text>
          <FlatList
            data={[
              {key: 'Route With Stack Navigation'},
              {key: 'Directory Structure'},
              {key: 'Firebase Auth and Request'},
              {key: 'Remote Api Data Request'},
              {key: 'FlatList Display'},
              {key: 'Tab Navigation'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View style={styles.buttons}>
          <Button  style={styles.button}  onPress={this.props.doLogin}  title="Login"/>
          <Button  style={styles.button}  onPress={() => navigate('API')}  title="FlatList Using Network Fetch Data"/>
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin: () => dispatch(doLogin(1))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  item: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttons:{
    flex: 1
  },
  button: {
    marginBottom: 10    
  }
});