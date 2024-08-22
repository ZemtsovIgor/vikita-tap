import { useContext } from 'react';
import { webAppContext } from '../contexts/webAppContext';

/**
 * @private
 * @ignore
 */
const useWebApp = () => {
  return useContext(webAppContext);
};

export default useWebApp;
