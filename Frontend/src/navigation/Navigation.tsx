import { NavigationContainer, DarkTheme, DefaultTheme, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { Provider, useSelector } from 'react-redux';
import store from '../store/store'; 
import { selectIsDark } from '../store/isDark';
import { darkTheme, lightTheme } from '../theme';

const Tab = createBottomTabNavigator();


const App = () => {
    const isDark = useSelector(selectIsDark);
    const theme = isDark ? DarkTheme : DefaultTheme

    return (
            <NavigationContainer
                theme={theme}
            >
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color}) => {
                            let iconName;
                            if ( route.name === 'Notes') {
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
                    <Tab.Screen name='Notes' component={HomeScreen}/>
                    <Tab.Screen name='Setting' component={SettingScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
    );
}

export default function AppWrapper() {
    return (
        <Provider store={store} >
            <App/>
        </Provider>
    );
}