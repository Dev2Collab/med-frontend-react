import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
