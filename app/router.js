import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScreen from './screens/Home';
import DatabaseScreen from './screens/Database';
import APIScreen from './screens/API';
import colors from "./config/colors";
import images from "./config/images";

import {  
  StyleSheet,
  Image
} from 'react-native';

const MyTabNavigator = TabNavigator({
		Home: { screen: HomeScreen },
	 	Database: { screen: DatabaseScreen },
	  	API: { screen: APIScreen }
	}, {
	  	tabBarOptions: {
		    showIcon: true,
		    activeTintColor: colors.iconColor,
		    inactiveTintColor:'#888',
		    style:{
		      backgroundColor:'#FFF',
		      borderColor:'#CCC',
		      borderWidth: 1
		    },
		    indicatorStyle : {
		      borderColor: colors.iconColor,
		      borderWidth: 3
		    }
	  	},
	}, {
		navigationOptions: {
		  	tabBarLabel: 'Home',	
			tabBarIcon: ({ tintColor }) => (
			  <Image
			    source={images.iconHome}
			    style={[styles.icon, {tintColor: colors.iconColor}]}
			  />
			),
		}
	}
);

const MyAppRouter = StackNavigator({
	Home: { screen: MyTabNavigator },
	Database: { screen: DatabaseScreen },
	API: { screen: APIScreen }
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  }
});

export default MyAppRouter;