'use strict';

import React, { Component } from 'react';
import YouTube from "react-native-youtube";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

const { width, height } = Dimensions.get("window");

class YoutubeTemplate extends Component {
	constructor(props){
        super(props);
        this.state = {
            time: 0,
            clicked: false
        };
    }

    videoId(url) {
        let youtubeID = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
        return youtubeID;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    videoThumb() {
        let youtubeID = this.props.video.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
        return "http://img.youtube.com/vi/" + youtubeID + "/0.jpg";
    }

    playVideo() {
        this.setState({ clicked: true });
    }

  	render() {
        if (this.state.clicked) {
            return (
                <View style={styles.container}>
                    <YouTube
                        videoId={this.videoId(this.props.video)}
                        style={styles.thumb}
                        play={true}
                        fullscreen={true}
                        apiKey="AIzaSyDf9Szd5PLIHRyvXJjtC9VY1c8PvzdLZh0"
                      />
                </View>
            );
        }
        return (
	        <View style={styles.thumbContainer} >
	            <Image source={{ uri: this.videoThumb() }} style={styles.thumb} >
			        <View style={styles.overlay} >
		        		<View style={styles.playContainer} >
		        			<TouchableOpacity onPress={() => { this.playVideo(); }} >
		        				<View style={styles.playCircle}>
							        <View style={styles.playTriangle} />
		        				</View>
		        			</TouchableOpacity>
		        		</View>
				        <View style={styles.titleContainer} >
		       				<Text style={styles.title}>
		        				{this.props.videoTitle}
		        			</Text>
		       			</View>
		        	</View>
	        	</Image>
	        </View>
        );
    }
}

const styles = StyleSheet.create({
	thumbContainer: {
		backgroundColor: "transparent"
	},
	thumb: {
		width, 
		height: height / 4
	},
	overlay: { 
		backgroundColor: "rgba(43, 76, 119, 0.4)", 
		flex: 1, 
		width
	},
	playContainer: { 
		flex: 7, 
		alignItems: "center", 
		justifyContent: "center" 
	},
	playCircle: {
        height: height / 10,
        width: height / 10,
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: height,
        alignItems: "center",
        justifyContent: "center"
	},
	playTriangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "white",
        transform: [{ rotate: "90deg" }]
	},
	titleContainer: {
        flex: 3,
        backgroundColor: "rgba(0,0,0, 0.3)",
        justifyContent: "center",
        paddingLeft: 10
	},
	title: { 
		color: "white", 
		fontSize: 16 
	}
});


export default YoutubeTemplate;