import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { Provider, useSelector } from 'react-redux';
import store from '../store/store'; 
import { selectIsDark } from '../store/isDark';
import { darkTheme, lightTheme } from '../theme';

const Tab = createBottomTabNavigator();


export default function App() {
    //const isDark = useSelector(selectIsDark);
    //console.log(isDark)

    return (
        <Provider store={store}>
            <NavigationContainer
                /* theme={theme} */
            >
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color}) => {
                            let iconName;
                            if ( route.name === 'Home') {
                                iconName = focused ? 'book' : 'book-outline'
                                color = focused ? '#2074e9' : '#b0b0b0'
                            } else if (route.name === 'Setting') {
                                iconName = focused ? 'settings' : 'settings-outline';
                                color = focused ? '#2074e9' : '#b0b0b0'
                            }
                            return <Icon1 name={iconName} size={20} color={color}/>
                        },
                    })
                    }
                >
                    <Tab.Screen name='Home' component={HomeScreen}/>
                    <Tab.Screen name='Setting' component={SettingScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}