import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/Home';
import DatabaseScreen from './screens/Database';
import APIScreen from './screens/API';

const MyAppRouter = StackNavigator({
	Home: { screen: HomeScreen },
	Database: { screen: DatabaseScreen },
	API: { screen: APIScreen }
});

export default MyAppRouter;