import axios from 'axios';
import {User} from '../../schemas';

export class UserService {
    static async getUsers(): Promise<User[]> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;

        return users.map((user: any) => (<User>{
            id: user.id,
            fullName: user.name,
            email: user.email,
            address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
        }));
    }
}
