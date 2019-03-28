import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../pages/loginform'
import RegForm from '../pages/regform'
import ForgotPassword from '../pages/forgotpassword'
import DashBoard from '../pages/dashboard'

const MainNavigator = createDrawerNavigator({
  Login: { screen: LoginPage },
  Register: { screen: RegForm },
  ForgotPassword: { screen: ForgotPassword },
  Home: { screen: DashBoard }


},
  {
    initialRouteName: 'Home'
  });

const Navigation = createAppContainer(MainNavigator);

export default Navigation;