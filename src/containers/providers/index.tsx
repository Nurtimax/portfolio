import { ThemeProvider } from '@/components/UI';
import { persistor, store } from '@/store';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface IProvidersProps {
  children: ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default Providers;
