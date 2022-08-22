import { getInstance } from "../services/api";

export async function getGamesByFilter(category, platform) {
    let url = '/games?';
    url += category ?  `category=${category}&` : '';
    url += platform ?  `platform=${platform}&` : '';
    const instance = await getInstance();
    const response = await instance.get(url);
    return response.data;
}
export async function getGamesByManyCategories (categories, platform){
    const response = await Promise.all(
    categories.map(async (category) => await getGamesByFilter(category, platform)),
    );
    return response.flat();
}

