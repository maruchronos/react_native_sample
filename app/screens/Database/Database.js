import React, { Component } from "react";
import {  
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
  Button,
  Image,
  View
} from 'react-native';
import * as firebase from "firebase";
import firebaseConfig from "../../config/firebase";
import firebaseServices from "../../services/firebase";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import colors from "../../config/colors";
import images from "../../config/images";

class DatabaseSreen extends Component {
    static navigationOptions = {
        title: 'Database',
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return (<Image
                source={images.iconDB}
                style={[styles.icon, {tintColor: colors.iconColor}]}
            />)
        }
    };
    
    constructor(props){
        super(props);
        this.state = {            
            user: 'yokormsm@gmail.com',
            password: 'm4rum4ru',
            data: []
        }
    }

    componentWillMount(){
    }    

    _handleLoginButton = () => {
        firebaseServices.firebaseLogin(this.state.user, this.state.password, this._doLogin);
    }

    _doLogin = (user) => {
        this.props.doLogin(user);
        if(!this.props.appData.loggedIn) 
            return;

        this.props.showLoading();
        firebaseServices.getFromDB('users','email',(items) => {
            this.setState({
                data: items,
            });
            this.props.hideLoading();
        });
    }

    _renderList = ({item}) => (
        <View style={styles.li}>
            <Text style={styles.liText}>{item.value}</Text>    
        </View>
    );

    render() {

        if(!this.props.appData.loggedIn){
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <Button  style={styles.button}  onPress={this._handleLoginButton}  title="LOGIN"/>
                </View>
            );
        }
        
        if (this.props.appData.loading) {
            return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
            </View>
            );
        }

        return (
            <View style={styles.container}>
                <FlatList          
                    horizontal= {false}          
                    data= {this.state.data}
                    keyExtractor= {(x,i)=>x._key}
                    renderItem= {this._renderList}
                />
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
)(DatabaseSreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingTop: 14
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  icon: {
    width: 30,
    height: 30,
    opacity: 1
  }
});