import { Modal, Text, StyleSheet, View, Pressable } from "react-native";
import { useSelector } from 'react-redux';  // Selector
import { selectIsDark } from "../store/isDark"; //  State
import { darkTheme, lightTheme } from "../theme";

export default function NoteView({title, description, timestamp, visible, onClose}) {
     
    const isDark = useSelector(selectIsDark);
    const theme = isDark ? darkTheme : lightTheme;

    function time() {
        const date = new Date(timestamp);

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const dateFormated = `${day}/${month}/${year}`

        return dateFormated
    } 

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, {backgroundColor: theme.colors.background} ]}>
                    <Text style={[styles.modalTitle, { color: theme.colors.text }]}>{title}</Text>
                    <Text style={{color : theme.colors.text}}>{description}</Text>
                    <Text style={[styles.date, {color: theme.colors.text}]}>{time()}</Text>
                    <Pressable onPress={onClose} style={styles.button}>
                        <Text style={styles.text2}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        maxWidth: 350,
        maxHeight: 400,
        minWidth: 350,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#87d5f2',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
    },
    text2: {
        fontWeight: 'bold',
        color: '#FFFF',
        textAlign: 'center'
    },
    date: {
        fontWeight: 'light',
        fontStyle: 'italic',
        color: 'gray',
        textAlign: 'right',
        paddingTop: 20
    }
});