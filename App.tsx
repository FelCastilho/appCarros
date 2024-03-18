import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { ToastProvider } from "./src/context/ToastContext";


export default function App() {

  return (
    <NavigationContainer>
      <ToastProvider>
        <StatusBar backgroundColor="#f3f5f8" barStyle="dark-content" />
        <Routes/>
      </ToastProvider>
    </NavigationContainer>
  );
  
}

