 "use server"
import data from '../../public/animal.json';
import featureanimal from '../../public/featureanimal.json';

export const getData = async () => {
    return data;
}

export const animalData = async () => {
    return featureanimal;
}