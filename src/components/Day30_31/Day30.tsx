import React from 'react';
import ReactDOM from 'react-dom';
import AppType from './AppType';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const Day30=()=>
{
  return(<>
  <QueryClientProvider client={client}>
    <AppType />
  </QueryClientProvider>
  </>);
  
}
export default Day30;