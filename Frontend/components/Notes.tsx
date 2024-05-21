import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Modal  } from "react-native";
import NoteView from "./NoteView";


export default function Notes({id, title, description, timestamp, clearNote})
{

const [ isDeleteActive, setIsDeleteActive] = useState(false);
const [ isModalVisible, setIsModalVisible ] = useState(false);

const url = "http://192.168.0.36:3000/notes"
const url2 = "http://192.168.177.51:3000/notes"

async function deleteNote() {
    const response = await fetch(`${url2}/${id}`, {
        method: "DELETE"
    });
    clearNote(id);
}

function excerpt() {
    const resu = description;
    const ver = resu.slice(0, 100)
    return ver
}


function press() {
    setIsDeleteActive(false);
    setIsModalVisible(true);
}

 return (
     <>
        <TouchableOpacity
            onLongPress={() => setIsDeleteActive(true)}
            onPress={press}
            activeOpacity={0.8}
            style={Styles.container}
        >
            <View style={Styles.item}>
                <Text style={Styles.title}>{ title }</Text>
                <Text style={Styles.desc}>{ description }</Text>
            </View>
            
            { isDeleteActive && (
                    <Pressable style={Styles.delete} onPress={deleteNote} >
                        <Text style={Styles.x} >X</Text>
                    </Pressable>
                ) 
            }

        </TouchableOpacity>

        <NoteView
            visible={isModalVisible}
            title={title}
            description={description}
            timestamp={timestamp}
            onClose={() => setIsModalVisible(false)}
        />
    </>
 )
}

const Styles = StyleSheet.create({
    item : {
        backgroundColor: '#efefef',
        borderRadius: 10,
        padding: 6,
        height: 70,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    delete: {
        position: 'absolute',
        top: 10,
        right: 20,
        backgroundColor: '#f445',
        padding: 2,
        borderRadius: 50,
        width: 25
    },
    x: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFF'
    },
    title: {
        fontWeight: 'bold'
    }, 
    desc: {
        paddingRight: 33,
    }

});

