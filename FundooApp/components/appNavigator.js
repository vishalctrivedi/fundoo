import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../pages/loginform'
import RegForm from '../pages/regform'
import ForgotPassword from '../pages/forgotpassword'
import DashBoard from '../pages/dashboard'
import TakeNote from '../pages/takeNote'
import ResetPassword from '../pages/resetPassword'

const MainNavigator = createDrawerNavigator({
  Login: { screen: LoginPage },
  Register: { screen: RegForm },
  ForgotPassword: { screen: ForgotPassword },
  Home: { screen: DashBoard },
  TakeNote:{screen:TakeNote},
  ResetPassword:{screen:ResetPassword}


},
  {
    initialRouteName: 'Home'
  });

const Navigation = createAppContainer(MainNavigator);

export default Navigation;