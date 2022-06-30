export interface ICocktail{
    id?: number,
    user_id: number,
    nom: string,
    description: string,
    recette: string,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: string
}

export interface ISingleCocktail{
    data: ICocktail
}

export interface IDataCocktail{
    data: ICocktail[]
}