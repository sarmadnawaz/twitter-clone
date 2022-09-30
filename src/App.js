import './sass/main.scss';
import { RouterProvider } from 'react-router-dom'
import router from './routing/router'
import UserProvider from './store/UserProvider'


function App() {
  return (
      <UserProvider>
      <RouterProvider router={router} />
      </UserProvider>
  );
}

export default App;
