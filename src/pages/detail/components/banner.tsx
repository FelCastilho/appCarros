import { Image, StyleSheet, Dimensions, View } from "react-native";

const { width: widthScreen } = Dimensions.get('window');

export function Banner({url} : {url: string}){
    return(
        <Image
            source={{uri: url}}
            style={styles.cover}
            resizeMode="cover"
        />
    )
}

export function BannerLoading(){
    return(
        <View style={styles.loading}>

        </View>
    )
}

export const styles = StyleSheet.create({
    cover:{
        width: widthScreen / 1.2,
        height: 330,
        marginTop: 8,
        marginLeft: 6,
        marginRight: 6,
        borderRadius: 8,
    },
    loading:{
        width: widthScreen / -16,
        height: 330,
        marginTop: 8,
        borderRadius: 8,
        backgroundColor: '#dddd'
    }
});