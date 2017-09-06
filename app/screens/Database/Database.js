import React, { Component } from "react";
import {  
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';
import * as firebase from "firebase";
import firebaseConfig from "../../config/firebase";
import firebaseServices from "../../services/firebase";

export default class DatabaseSreen extends Component {
    static navigationOptions = {
        title: 'Database'     
    };
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentWillMount(){
        firebaseServices.firebaseLogin('yokormsm@gmail.com','m4rum4ru');
    }

    componentDidMount() {
        firebaseServices.getFromDB('users','email',(items) => {
            this.setState({
                data: items,
                isLoading: false
            });
        });
    }

    _renderList = ({item}) => (
        <View style={styles.li}>
            <Text style={styles.liText}>{item.value}</Text>    
        </View>
    );

    render() {
        
        if (this.state.isLoading) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});