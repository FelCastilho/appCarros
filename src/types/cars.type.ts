//COMPONENTE COM AS INTERFACES VINDAS DO FIREBASE

//Propriedades vindas do banco de dados
export interface CarsProps {
    id: string;
    name: string;
    year: string;
    km: string;
    city: string;
    price: string | number;
    uid: string;
    images: CarImageProps[];
}

//Como a estrutura do Images é diferente, é melhor criar outra interface
export interface CarImageProps{
    name: string;
    uid: string;
    url: string;
}