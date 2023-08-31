import { CatEntry, GatitosSinInfoSensible } from '../types';
import catsData from './cats.json';

const gatitos: CatEntry[] = catsData as CatEntry[]

export const getCats = ():CatEntry[] => gatitos;

export const addCat = () => null;

export const getGatitosSinInfoSensible = (): GatitosSinInfoSensible[] => {
    return gatitos.map(({id, nombre, raza, fecha_nacimiento, caracteristicas, personalidad}) => {
        return {
            id,
            nombre,
            raza,
            fecha_nacimiento,
            caracteristicas,
            personalidad
        }
    })
}

// const gatitosSinInformacionProtegida = getGatitosSinInfoSensible()
// gatitosSinInformacionProtegida[0].

