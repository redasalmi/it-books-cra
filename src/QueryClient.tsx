import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface AppQueryClientProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const AppQueryClientProvider = ({ children }: AppQueryClientProviderProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default AppQueryClientProvider;
