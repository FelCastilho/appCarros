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

//Pegando os detalhes do item que estão cadastrados no firebase
export interface CarDetailProps{
    id: string;
    name: string;
    model: string;
    price: string;
    city: string;
    km: string;
    year: string;
    description: string;
    created: string;
    owner: string;
    uid: string;
    whatsapp: string;
    images: CarImageProps[];
}