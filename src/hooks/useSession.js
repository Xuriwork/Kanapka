import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

export const useSession = () => {
  const { user } = useContext(UserContext);
  const [token, setToken] = useState(null);

  if (!user) return false;

  (async () => {
    const token = await user.getIdToken();
    return setToken(token);
  })();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return {
    user,
    token,
    headers
  };
};
