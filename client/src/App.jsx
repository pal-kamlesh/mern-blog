import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Dashboard,
  Home,
  Projects,
  SignIn,
  SignUp,
} from "./pages/index";
import { FooterCom, Header } from "./components/index.js";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
