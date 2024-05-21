import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Pressable, Button, SafeAreaViewComponent} from 'react-native';
import { SafeAreaViewBase } from 'react-native';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useState, useEffect } from 'react' 

export default function NoteList() {

    const [isCreating, setIsCreating] = useState(false);
    const [notes, setNotes] = useState([]);
    const url = "http://192.168.0.36:3000/notes"
    const url2 = "http://192.168.177.51:3000/notes"

    async function fetchData() {
        const response = await fetch(url2);
        const data = await response.json();

        setNotes(data);
    }

    function clearNote(id: number) {
        setNotes(notes.filter((note) => note.id !== id))
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <>
            <SafeAreaView>
                <View style={styles.re}>

                </View>
                {/* <Button title="NEW" onPress={() => setIsCreating(true)}/> */}
                <Pressable
                    onPress={() => setIsCreating(true)}
                    style={styles.create}
                >
                    <Text style={styles.text2}>NEW</Text>
                </Pressable>
                
                <FlatList 
                    data ={notes}
                    keyExtractor={(note) => note.id}
                    renderItem={({item}) => <Notes {...item} clearNote={clearNote}/>}
                    ListHeaderComponent={() => <Text style={styles.titleheader}> <Icon name="notebook" size={25}/> Notes </Text>}
                    contentContainerStyle={styles.flalisContainer}
                />
            </SafeAreaView>

            <CreateNote
                visible={isCreating}
                notes={notes}
                setNotes={setNotes}
                onClose={() => setIsCreating(false)}
            />
        </>
    );
}

const styles = StyleSheet.create({
    titleheader: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 15,
    },
    flalisContainer: {
        paddingHorizontal: 15,
        marginTop: 15,
        gap: 15
    },
    text: {
        color: '#FFFF',
    },
    text2: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFF'
    },
    ver: {
        top: 40,
    },
    re: {
        height: 40
    },
    create: {
        left: 310,
        backgroundColor: '#87d5f2',
        paddingVertical: 4,
        paddingHorizontal: 8,
        width: 60,
        borderRadius: 5,
    }
});