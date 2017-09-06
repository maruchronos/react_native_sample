import React, { Component } from "react";
import {  
  StyleSheet,
  Text,
  Button,
  FlatList,
  View
} from 'react-native';
import MyAppRouter from '../../router';

export default class HomeScreen extends Component {
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
          <Button  style={styles.button}  onPress={() => navigate('Database')}  title="FlatList using Firebase data"/>
          <Button  style={styles.button}  onPress={() => navigate('API')}  title="FlatList Using Network Fetch Data"/>
        </View>
      </View>
    );
  }
}

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