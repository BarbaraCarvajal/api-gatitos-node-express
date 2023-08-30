import { CatEntry } from '../types';
import catsData from './cats.json';

const gruposGatos: Array<CatEntry> = catsData as Array<CatEntry>

export const getCats = () => gruposGatos;

export const addCat = () => null;

