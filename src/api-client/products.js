import { client } from './client';


export const getProductList = () => client.get('posters/');
