import React, { Component } from "react";
import MyAppRouter from '../../router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import colors from "../../config/colors";
import images from "../../config/images";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    Button,
    FlatList,
    Image,
    View,
    Linking
} from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);    
    }

    static navigationOptions = {
        title: 'Home',
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return (<Image
                source={images.iconHome}
                style={[styles.icon, {tintColor: colors.iconColor}]}
            />)
        }
    };

    componentDidMount() {
        this.props.hideLoading();    
    }

    _shareOnWhatsapp(url){
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

  render() {
    const { navigate } = this.props.navigation;
    if(this.props.appData.loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator />          
        </View>
      );
    }
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
              {key: 'Tab Navigation'},
              {key: 'Redux'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View style={styles.buttons}>          
          <Button  style={styles.button}  onPress={() => this._shareOnWhatsapp('whatsapp://send?text=Hello World!&phone=+5575991902962')}  title="Send Whatsapp Message"/>
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch);
}

export default connect(
  (state) => {    
    return state;
  },
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
  },
  icon: {
    width: 30,
    height: 30,
    opacity: 1
  }
});