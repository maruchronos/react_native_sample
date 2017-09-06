import React, { Component } from "react";
import {  
    ActivityIndicator,
    StyleSheet,
    Text,
    FlatList,
    View
} from 'react-native';

export default class APISreen extends Component {
    static navigationOptions = {
        title: 'API'     
    };
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }        
    }

    componentWillMount(){
        this._fetchData();
    }

    _fetchData = async () => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {        
            console.log(responseJson);
            this.setState({
                isLoading:false,
                data: responseJson.movies
                });
            })
            .catch((error) => {
                console.error(error);
            });    
    }

    _renderList = ({item}) => (
        <View key={item.title+item.releaseYear} style={styles.li}>
            <Text style={styles.liText}>{item.title}</Text>    
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
                    keyExtractor= {(x,i)=>x.title+x.releaseYear}
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