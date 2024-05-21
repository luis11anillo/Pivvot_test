
import { Modal, Text, Button, StyleSheet, View, Pressable } from "react-native";

export default function NoteView({title, description, timestamp, visible, onClose}) {
      
    function time() {
        const date = new Date(timestamp);

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const dateFormated = `${day}/${month}/${year}`

        return dateFormated
        //console.log(dateFormated)
    } 

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text>{description}</Text>
                    <Text style={styles.date}>{time()}</Text>
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