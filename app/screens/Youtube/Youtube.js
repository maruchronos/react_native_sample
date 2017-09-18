import React, { Component } from "react";
import {  
  StyleSheet,
  Image
} from 'react-native';
import * as firebase from "firebase";
import firebaseConfig from "../../config/firebase";
import firebaseServices from "../../services/firebase";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import colors from "../../config/colors";
import images from "../../config/images";
import YoutubeTemplate from '../../components/YoutubeTemplate';

class YoutubeSreen extends Component {
    static navigationOptions = {
        title: 'Youtube',
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return (<Image
                source={images.iconYoutube}
                style={[styles.icon, {tintColor: colors.iconColor}]}
            />)
        }
    };

    render() {
        return (
            <YoutubeTemplate video="https://www.youtube.com/watch?v=xD4Y0NN4fSs" videoTitle="Um café lá em casa" />
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
)(YoutubeSreen)

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