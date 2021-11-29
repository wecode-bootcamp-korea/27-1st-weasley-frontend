import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productlist"></Route>
        <Route path="/productdetail"></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
