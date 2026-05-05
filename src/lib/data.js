 "use server"
import data from '../../public/animal.json';
export const getData = async () => {
    return data;
}