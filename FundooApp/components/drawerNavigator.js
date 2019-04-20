import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import DashBoard from '../pages/dashboard'
import Login from '../pages/loginform'
import TakeNote from '../pages/takeNote'
import Archive from '../pages/archive'

navigationOptions = { header: null };
const MyDrawer = createDrawerNavigator(
  {
    Notes: { screen: DashBoard },
    Login: { screen: Login },
    TakeNote: { screen: TakeNote },
    Archive: { screen: Archive }
  },

  {
    navigationOptions: {
      gesturesEnabled: false,
    },

    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#199187",

    },
    drawerPosition: 'left',

  }
);
const Drawer = createAppContainer(MyDrawer);
export default Drawer; 