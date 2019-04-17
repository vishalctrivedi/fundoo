import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../pages/loginform'
import RegForm from '../pages/regform'
import ForgotPassword from '../pages/forgotpassword'
import DashBoard from '../pages/dashboard'
import TakeNote from '../pages/takeNote'
import ResetPassword from '../pages/resetPassword'
import Drawer from '../components/drawerNavigator'

const MainNavigator = createStackNavigator({
  
  Login: { screen: LoginPage, },
  Register: { screen: RegForm },
  ForgotPassword: { screen: ForgotPassword },
  Notes: { screen: DashBoard, navigationOptions: { header: null } },
  TakeNote: { screen: TakeNote, navigationOptions: { header: null } },
  ResetPassword: { screen: ResetPassword },
  Drawer: { screen: Drawer, navigationOptions: { header: null } },
},
  {
    initialRouteName: 'Drawer'
  });

const Container = createAppContainer(MainNavigator);

export default Container;