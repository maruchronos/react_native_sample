import {StackNavigator, TabNavigator} from 'react-navigation';
import HomeScreen from './screens/Home';
import DatabaseScreen from './screens/Database';
import YoutubeScreen from './screens/Youtube';
import APIScreen from './screens/API';
import colors from "./config/colors";

const MyTabNavigator = TabNavigator({
		Home: { screen: HomeScreen },
	 	Database: { screen: DatabaseScreen },
	  	API: { screen: APIScreen },
	 	Youtube: { screen: YoutubeScreen }
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
	}
);

const MyAppRouter = StackNavigator({
	Home: { screen: MyTabNavigator },
	API: { screen: APIScreen },
	Database: { screen: DatabaseScreen },
	Youtube: { screen: YoutubeScreen }
});

export default MyAppRouter;