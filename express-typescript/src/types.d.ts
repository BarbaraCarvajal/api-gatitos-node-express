export type Raza = 'siames' | 'maine coon' | 'persa' | 'tuxedo' | 'angora' | 'atigrado' | 'sphynx' | 'siberiana';
export type Personalidad = 'fuerte' | 'sociable' | 'poco amistosa' | 'aventurera' | 'timida' | 'miedosa' | 'juguetona';

export interface CatEntry {
    id: number,
    nombre: string,
    raza: Raza,
    fecha_nacimiento: string,
    peso: number,
    personalidad: Personalidad,
    caracteristicas: string
}