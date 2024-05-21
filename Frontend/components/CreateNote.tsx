import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreateNote({notes, setNotes, visible, onClose}) {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const url = "http://192.168.0.36:3000/notes"
    const url2 = "http://192.168.177.51:3000/notes"

    const handleSummit = async () => {

        if (title === "" && description === "") {
            return;
        } else {
            const response = await fetch(url2, {
                headers: {
                    "content-type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    title,
                    description, 
                }),
            });
            const newNote = await response.json();
            setNotes([...notes, newNote ])
            setTitle("");
            setDescription("");
            onClose(); 
        }

    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.head}>Write a note <Icon name="notebook-edit" size={15} color="#900"/>  </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                    />
                    <View style={styles.buttons}>
                        <Button color={'#19aa06'} title="Save" onPress={handleSummit}/>
                        <Button color={'#ddbd15'} title="Cancel" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        width: 360,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 5,
    },
    buttons: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    }, 
    head: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 30
    }
});
