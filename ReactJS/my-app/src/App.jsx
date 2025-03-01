import { BrowserRouter, Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";
import { MainLayout } from "./components/layouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || MainLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
