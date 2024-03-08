import {  TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{}

export default function Input({...rest}: InputProps) {
    return (
        <TextInput
            style={styles.input}
            {...rest} //Todas as propriedades do Input
        />
    );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        height: 40,
        paddingTop: 6,
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 4,
    }
})