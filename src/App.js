import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHome from "./pages/AppHome";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<AppHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
