import { useState } from "react";
import { View, Text, StyleSheet, TextInputProps } from "react-native";

import { Header } from "../../components/header";
import Input from "../../components/input/input";


export function Home(){

    const [ searchInput, setSearchInput ] = useState("")
    return(
        <>
            <Header/>

            <View style={styles.container}>
                <View style={styles.inputArea}>
                    <Input
                        placeholder="Procurando algum carro?"
                        value={searchInput}
                        onChangeText={text => setSearchInput(text)}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f3f5f8",
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
    },
    inputArea:{
        width: '100%',
        marginTop: 14,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 8
    }
})