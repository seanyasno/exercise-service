import axios from 'axios';
import {Post} from '../../schemas';

export class PostExternalService {
    static async getPostsByUserId(userId: number, page: number, limit: number) {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_page=${page}&_limit=${limit}`;
        const response = await axios.get<Post[]>(url);
        return response.data;
    }
}
