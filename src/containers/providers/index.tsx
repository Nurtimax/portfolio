import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Box, styled } from '@mui/material';

import { ThemeProvider } from '@/components/UI';
import { persistor, store } from '@/store';

interface IProvidersProps {
  children: ReactNode;
}

const StyledProviders = styled(Box)(() => ({
  width: '100%'
}));

const Providers: FC<IProvidersProps> = ({ children }) => {
  return (
    <StyledProviders>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    </StyledProviders>
  );
};

export default Providers;
