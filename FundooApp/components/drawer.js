import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginPage from '../pages/loginform'
import DashBoard from '../pages/dashboard'

const MyDrawer = createStackNavigator({
  //Notes: {screen: DashBoard},
  //Reminders: {screen: Reminders},
  //CreateLabel: {screen: CreateLabel},
  SignOut: {screen: LoginPage}

},
{
  initialRouteName:'Notes'
});

const Drawer = createAppContainer(MyDrawer);

export default Drawer;