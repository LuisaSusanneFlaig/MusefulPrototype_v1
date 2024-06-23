import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Konto from "./pages/Konto";
import Favoriten from "./pages/Favoriten";
import Login1 from "./pages/Login1";
import Entdecken8 from "./pages/Entdecken8";
import Entdecken9 from "./pages/Entdecken9";
import Login from "./pages/Login";
import Entdecken from "./pages/Entdecken";
import Entdecken2 from "./pages/Entdecken2";
import Entdecken1 from "./pages/Entdecken1";
import Entdecken3 from "./pages/Entdecken3";
import Entdecken4 from "./pages/Entdecken4";
import Entdecken6 from "./pages/Entdecken6";
import Entdecken7 from "./pages/Entdecken7";
import Lesezeichen from "./pages/Lesezeichen";
import Onboarding from "./pages/Onboarding5";
import Lesezeichen1 from "./pages/Lesezeichen1";
import Entdecken from "./pages/Entdecken5";
import Onboarding1 from "./pages/Onboarding11";
import Onboarding2 from "./pages/Onboarding21";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding31 from "./pages/Onboarding3";
import Onboarding4 from "./pages/Onboarding4";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding3 from "./pages/Onboarding31";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/konto":
        title = "";
        metaDescription = "";
        break;
      case "/favoriten":
        title = "";
        metaDescription = "";
        break;
      case "/login2":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken10":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken11":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken1":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken3":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken2":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken4":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken5":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken7":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken8":
        title = "";
        metaDescription = "";
        break;
      case "/lesezeichen":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding1":
        title = "";
        metaDescription = "";
        break;
      case "/lesezeichen2":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken9":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding2":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding3":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding5":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding6":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding7":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding8":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding31":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/konto" element={<Konto />} />
      <Route path="/favoriten" element={<Favoriten />} />
      <Route path="/login2" element={<Login1 />} />
      <Route path="/entdecken10" element={<Entdecken8 />} />
      <Route path="/entdecken11" element={<Entdecken9 />} />
      <Route path="/login1" element={<Login />} />
      <Route path="/entdecken1" element={<Entdecken />} />
      <Route path="/entdecken3" element={<Entdecken2 />} />
      <Route path="/entdecken2" element={<Entdecken1 />} />
      <Route path="/entdecken4" element={<Entdecken3 />} />
      <Route path="/entdecken5" element={<Entdecken4 />} />
      <Route path="/entdecken7" element={<Entdecken6 />} />
      <Route path="/entdecken8" element={<Entdecken7 />} />
      <Route path="/lesezeichen" element={<Lesezeichen />} />
      <Route path="/onboarding1" element={<Onboarding />} />
      <Route path="/lesezeichen2" element={<Lesezeichen1 />} />
      <Route path="/entdecken9" element={<Entdecken />} />
      <Route path="/onboarding2" element={<Onboarding1 />} />
      <Route path="/onboarding3" element={<Onboarding2 />} />
      <Route path="/onboarding5" element={<Onboarding2 />} />
      <Route path="/onboarding6" element={<Onboarding31 />} />
      <Route path="/onboarding7" element={<Onboarding4 />} />
      <Route path="/onboarding8" element={<Onboarding1 />} />
      <Route path="/onboarding31" element={<Onboarding3 />} />
    </Routes>
  );
}
export default App;
