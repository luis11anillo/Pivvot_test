import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Modal  } from "react-native";
import NoteView from "./NoteView";
import { useSelector } from 'react-redux' 
import { selectIsDark } from '../store/isDark'
import { darkTheme, lightTheme } from "../theme";

export default function Notes({id, title, description, timestamp, clearNote})
{

const isDark = useSelector(selectIsDark);
const theme = isDark ? darkTheme : lightTheme;

const [ isDeleteActive, setIsDeleteActive] = useState(false);
const [ isModalVisible, setIsModalVisible ] = useState(false);

const url = "http://192.168.0.36:3000/notes"
const url2 = "http://192.168.177.51:3000/notes"

async function deleteNote() {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE"
    });
    clearNote(id);
}

function excerptf(text: string, limit: number) {
    if (typeof(text) !== 'string') { return ''}
    const res = text.length > limit ? text.slice(0, limit) + '...' : text
    return res
}

const excerpt = excerptf(description, 80);


function press() {
    if (isDeleteActive === true) {
        setIsDeleteActive(false);
    } else {
        setIsModalVisible(true);
    }
}

 return (
     <>
        <TouchableOpacity
            onLongPress={() => setIsDeleteActive(true)}
            onPress={press}
            style={Styles.container}
        >
            <View style={[Styles.item, {backgroundColor: theme.colors.background} ]}>
                <Text style={[Styles.title, {color: theme.colors.text}]}>{ title }</Text>
                <Text style={[Styles.desc, {color: theme.colors.text}]}>{ excerpt }</Text>
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
        //backgroundColor: '#FFFFFF',
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
        paddingTop: 2
    }

});

