import { View, Text, StyleSheet, Pressable, TouchableWithoutFeedback, Image } from "react-native"

interface ModalBannerProps{
    closeModal: () => void;
    imageUrl: string;
}

export function ModalBanner({ closeModal, imageUrl }: ModalBannerProps){
    return(
        <View style={styles.container}>

            <Pressable style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>

            <TouchableWithoutFeedback>   
                <Image
                source={{uri: imageUrl}}
                style={styles.image}
            />
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    closeButton:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        paddingRight: 14,
        paddingLeft: 14,
        position: 'absolute',
        top: 100,
        zIndex: 99,
        borderRadius: 4,
    },
    buttonText:{
        fontSize: 16
    }
})