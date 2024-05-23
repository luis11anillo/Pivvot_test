import { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { toggle, selectIsDark } from '../store/isDark'; 
import store from '../store/store';
import { darkTheme, lightTheme } from '../theme';

export default function SettingScreen() {

    //const [isDark, setIsDark] = useState(false);
    const isDark = useSelector(selectIsDark)
    const theme = isDark ? darkTheme : lightTheme;

    const dispatch = useDispatch();
    
    const toggleSwitch = () => {
        dispatch(toggle())
    }

    return (
        <Provider store={store}>
            <View>
                <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
                    <Text style={[styles.text, {color: theme.colors.text}]}>DarkMode</Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isDark}
                    />
                </View>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: 15,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    text: {
        paddingLeft: 4
    }
});
