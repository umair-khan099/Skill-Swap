import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from './App.store';
import router from './App.routes';


const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;