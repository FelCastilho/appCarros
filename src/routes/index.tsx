import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/home";
import { Detail } from "../pages/detail";
import { Favorites } from "../pages/favorites";

//Passando as tipagens dos parametros
export type StackParamList = {
    home: undefined; //O proprio Native Stack pede undefined
    detail: undefined;
    favorites: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

export function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="detail"
                component={Detail}
                options={{
                    headerShown: false,
                }}
            />  

            <Stack.Screen
                name="favorites"
                component={Favorites}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}