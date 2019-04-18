import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import DashBoard from '../pages/dashboard'
import Login from '../pages/loginform'

navigationOptions = { header: null };
const MyDrawer = createDrawerNavigator(
  {
    Notes: { screen: DashBoard },
  },

  {
    navigationOptions: {
      gesturesEnabled: false,
    },

    initialRouteName: "Notes",
    contentOptions: {
      activeTintColor: "#199187",

    },
    drawerPosition: 'left',

  }
);
const Drawer = createAppContainer(MyDrawer);
export default Drawer; 