import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginPage from '../pages/loginform'
import RegForm from '../pages/regform'
import ForgotPassword from '../pages/forgotpassword'
import DashBoard from '../pages/dashboard'

const MainNavigator = createStackNavigator({
  LoginPage: {screen: LoginPage},
  RegForm: {screen: RegForm},
  ForgotPassword: {screen: ForgotPassword},
  DashBoard: {screen: DashBoard}

},
{
  initialRouteName:'LoginPage'
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;