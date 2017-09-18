import React, { Component } from "react";
import {  
    ActivityIndicator,
    StyleSheet,
    Text,
    FlatList,
    Image,
    View
} from 'react-native';
import fetchData from '../../services/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import colors from "../../config/colors";
import images from "../../config/images";

class APISreen extends Component {
    static navigationOptions = {
        title: 'API',
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
            data: []
        }        
    }

    componentWillMount(){
        fetchData('movies',this._fetchData);
    }

    _fetchData = (response, error) => {
        if(error){
            console.log(error);
            return;
        }

        this.setState({            
            data: response.movies
        });

        this.props.loadFromAPI();
    }

    _renderList = ({item}) => (
        <View key={item.title+item.releaseYear} style={styles.li}>
            <Text style={styles.liText}>{item.title} - {item.releaseYear}</Text>    
        </View>
    );

    render() {
        
        if (!this.props.appData.sync) {
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch);
}

export default connect(
    (state) => {    
        return state;
    },
    mapDispatchToProps
)(APISreen)

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