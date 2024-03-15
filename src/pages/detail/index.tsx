import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Pressable, FlatList, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { StackParamList } from "../../routes";

import { CarDetailProps } from "../../types/cars.type";

import { doc, getDoc } from "firebase/firestore";

import { db } from "../../services/firebaseConnection";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Feather } from '@expo/vector-icons'
import { BannerList } from "./components/bannerList";
import { BannerLoading } from "./components/banner";
import { Label } from "./components/label";

//Mostrando o tipo que route irá receber vindo do componente carlist
type RouteDetailParams = {
    detail: {
        id: string;
    }
}

type DetailRouteProp = RouteProp<RouteDetailParams, 'detail'>

export function Detail() {

    const route = useRoute<DetailRouteProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

    const [car, setCar] = useState<CarDetailProps>();
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadCar() {
            if (!route.params.id) { return }

            const docRef = doc(db, "cars", route.params.id)
            getDoc(docRef)
                .then((snapshot) => {
                    //Se estiver vazio
                    if (!snapshot.data()) {
                        navigation.goBack();
                    }

                    setCar({
                        id: snapshot.id,
                        name: snapshot.data()?.name,
                        year: snapshot.data()?.year,
                        city: snapshot.data()?.city,
                        model: snapshot.data()?.model,
                        uid: snapshot.data()?.uid,
                        created: snapshot.data()?.created,
                        description: snapshot.data()?.description,
                        km: snapshot.data()?.km,
                        owner: snapshot.data()?.owner,
                        price: snapshot.data()?.price,
                        whatsapp: snapshot.data()?.whatsapp,
                        images: snapshot.data()?.images
                    })

                })
                .finally(() => {
                    setLoading(false)
                })
        }

        loadCar()

    }, [route.params.id])

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={"large"} color={"#000"} />
            </SafeAreaView>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <SafeAreaView>

                <View style={styles.container}>

                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}>

                        <Feather name="arrow-left" size={36} color="#000" />

                    </Pressable>

                    {loading}

                    {loading && <BannerLoading/>}

                    {!loading && car?.images && (
                        <BannerList
                            images={car.images}
                            handleOpenImage={(imageUrl) => { console.log(imageUrl) }}
                        />
                    )}

                    <View style={styles.header}>

                        <Pressable
                            style={styles.saveContent}
                        >
                            <Feather size={22} color='#fff' name="bookmark"/>
                        </Pressable>

                        <Text style={styles.title}>{car?.name}</Text>
                        <Text>{car?.model}</Text>

                    </View>

                    <View style={styles.content}>
                        <Text style={styles.price}>{car?.price}</Text>

                        <View style={styles.labels}>
                            <Label label="Cidade" name={car?.city}/>

                            <Label label="Ano" name={car?.year}/>
                        </View>

                        <View style={styles.labels}>
                            <Label label="KM Rodados" name={car?.km}/>

                            <Label label="Telefone" name={car?.whatsapp}/>
                        </View>
                    </View>

                </View>

            </SafeAreaView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f5f8',
        alignItems: "center",
        paddingBottom: 16
    },
    backButton: {
        width: 52,
        height: 52,
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 24,
        top: 44,
        zIndex: 99
    },
    header:{
        backgroundColor: "#fff",
        position: 'relative',
        width: '90%',
        borderRadius: 8,
        gap: 4,
        paddingBottom: 14,
        paddingLeft: 8,
        paddingRight: 8,
        top: -34,
        zIndex: 99,
    },
    saveContent:{
        position: 'absolute',
        zIndex: 99,
        padding: 12,
        borderRadius: 99,
        right: 8,
        top: -24
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    content:{
        alignSelf: 'flex-start',
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: -14,
        width: '100%'
    },
    price:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000'
    },
    labels:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 24,
        marginTop: 14,
    }
})