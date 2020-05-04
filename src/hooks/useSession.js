import { useContext } from 'react';
import UserContext from '../state/UserContext';

export const useSession = () => {
    const { user } = useContext(UserContext);
    return user;
};