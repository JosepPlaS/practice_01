import { BrowserRouter, Routes, Route } from "react-router-dom";
import { init } from "./data/coches";

import { Header } from "./components/organism/Header";
import { CochesTabla } from "./components/organism/CochesTabla";
import { CocheForm } from "./components/organism/CocheForm";

export function App() {
  init();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<></>} />
        <Route path="coches" element={<CochesTabla />} />
        <Route path="coches/:cocheId" element={<CocheForm />} />
        <Route
          path="*"
          element={<> Error: no se ha encontrado la pagina. </>}
        />
      </Routes>
    </BrowserRouter>
  );
}
