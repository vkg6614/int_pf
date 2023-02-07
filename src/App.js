import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "./components/Home/Home";
import QuoteCreation from "./components/QuoteCreation/QuoteCreation";
import Quotes from "./components/Quotes/Quotes";
import Policies from "./components/Policies/Policies";
import Clients from "./components/Clients/Clients";
import Entity from "./components/Entity/Entity";
import Users from "./components/Users/Users";
import Configuration from "./components/Configuration/Configuration";
import ProductBuilder from "./components/ProductBuilder/ProductBuilder";
import Admin from "./components/AdminPage/Admin";
import AdminMenu from "./components/AdminPage/AdminMenu";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route exact path="/" element={<Navigate to="/api" />} />
            {/* <Route path="/api" element={<Home />} /> */}
            <Route path="/api" element={<Admin />} />

            <Route path="/api/quote_creation" element={<QuoteCreation />} />
            <Route path="/api/quotes" element={<Quotes />} />
            <Route path="/api/policies" element={<Policies />} />
            <Route path="/api/clients" element={<Clients />} />
            <Route path="/api/entity" element={<Entity />} />
            <Route path="/api/users" element={<Users />} />
            <Route path="/api/configuration" element={<Configuration />} />
            <Route path="/api/product_builder" element={<ProductBuilder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
