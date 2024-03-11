import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInputProps, ActivityIndicator, FlatList } from "react-native";

import { Header } from "../../components/header";
import Input from "../../components/input/input";

import { db } from "../../services/firebaseConnection";

import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

import { CarsProps } from "../../types/cars.type";
import CarItem from "../../components/carlist";

export function Home(){

    const [ searchInput, setSearchInput ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const [ cars, setCars ] = useState<CarsProps[]>([]);

    useEffect(() => {

        async function fetchCars(){
            await loadCars()
        }

        fetchCars()
        
    }, [])

    async function loadCars(){
        const carsRef = collection(db, 'cars')
        const queryRef = query(carsRef, orderBy('created', "desc"))

        getDocs(queryRef)
        .then((snapshot) => {
            let listCars = [] as CarsProps[];

            snapshot.forEach(doc => {
                listCars.push({

                    id: doc.id,
                    name: doc.data().name,
                    year: doc.data().year,
                    city: doc.data().city,
                    km: doc.data().km,
                    price: doc.data().price,
                    uid: doc.data().uid,
                    images: doc.data().images,

                })
            })

            setCars(listCars);
            setLoading(false);
        })
    }

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

                {loading && (
                    <ActivityIndicator
                        style={{marginTop: 14}}
                        size="large"
                        color="#000"
                    />
                )}  

                <FlatList
                    data={cars}
                    keyExtractor={(item) => item.id}
                    renderItem={( {item} ) => <CarItem data={item} widthScreen= {cars.length <= 1 ? "100%" : '49%'}/>}
                    style={styles.list}
                    numColumns={2} //Adicionado colunas
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    contentContainerStyle={{paddingBottom: 14}}
                    showsVerticalScrollIndicator={false}
                />

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
    },
    list:{
        flex: 1,
        marginTop: 4,
        paddingTop: 14,
    }
})