import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

import { PATH } from '@/constants';
import { DashboardPage, NotFoundPage } from '@/pages';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
