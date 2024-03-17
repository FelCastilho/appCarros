import { Pressable, StyleSheet, Image, DimensionValue, Text, View } from 'react-native';

import { CarsProps } from '../../types/cars.type';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../routes';

interface CarItemProps{
    data: CarsProps;
    widthScreen: DimensionValue;
    enableRemove?: boolean;
    removeItem?: () => Promise<void>;
}

export default function CarItem({ data, widthScreen, enableRemove = false, removeItem }: CarItemProps) {

    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

    function handleNavigate(){
        navigation.navigate("detail", {id: data.id})
    }

    async function handleRemove(){
        if(!removeItem) return;

        await removeItem();
    }

    return (
        <Pressable 
            style={[styles.container, {width: widthScreen}]}
            onPress={handleNavigate}
            onLongPress={ enableRemove ? handleRemove : () => {}}
        >

            <Image
                style={styles.cover}
                source={{ uri: data.images[0].url }}
                resizeMode='cover'
            />

            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.text}>{data.year} - {data.km} km</Text>

            <Text style={[styles.title, { marginTop: 14}]}>{data.price}</Text>

            <View style={styles.divisor}></View>

            <Text style={[styles.title, {marginTop: 14}]}>{data.city}</Text>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#fff',
        padding: 4,
        borderRadius: 4,
        marginTop: 14
    },
    cover:{
        width: '100%',
        height: 140,
        borderRadius: 4,
        marginBottom: 4,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 4
    },
    text:{
        marginBottom: 4,
        fontSize: 12
    },
    divisor:{
        width: '100%',
        height: 1,
        backgroundColor: '#d9d9d9'
    }
})