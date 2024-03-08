import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

//Pegando os tipos que criei
import { StackParamList } from "../../routes";

//Necessario para instanciar os tipos de navegação
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 

export function Header(){

    //É necessario passar alguns parametros
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    function handleNavigationFavorite(){
        navigation.navigate("favorites")
    }

    return(
        <SafeAreaView style={styles.container}>

            <Image
                source={require("../../assets/logo.png")}
            />

            <Pressable
            style={styles.button}
            onPress={handleNavigationFavorite}
            >  
                <Feather name="bookmark" size={24} color='#fff'/>
            </Pressable>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f3f5f8',
        flexDirection: 'row',
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 14,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    button:{
        backgroundColor: '#1f1f1f',
        width: 42,
        height: 42,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})