import React, {FC, useEffect} from 'react';
import { RouterProvider } from 'react-router-dom';
import { useZuStore } from './store/useZuStore';
import router from './routes/routes';

const App: FC = () => {
  const allInfo = useZuStore((state) => state.zuData);

  useEffect(() => {
    allInfo();
  }, [allInfo]);

  return <RouterProvider router={router} />;
};

export default App;
