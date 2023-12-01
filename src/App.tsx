import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATH } from '@/constants';
import { DashboardPage, NotFoundPage } from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
