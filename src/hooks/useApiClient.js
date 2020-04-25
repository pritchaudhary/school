import { useContext, useEffect } from 'react';
/**
 * vendor components
 */
import { ReactReduxContext, useSelector } from 'react-redux';
/**
 * components
 */
const useApiClient = token => {
  const accessToken = useSelector(state => state.auth.accessToken);
  // console.log("accessToken useApiClient", accessToken);
  const {
    store: {
      helpers: { client }
    }
  } = useContext(ReactReduxContext);

  useEffect(() => {
    if (token && token !== null) {
      client.setJwtToken(token);
      return;
    }
    client.setJwtToken(accessToken);
  }, [accessToken, client, token]);
  return { apiClient: client };
};

export default useApiClient;
