import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  CreatePost,
  Dashboard,
  Home,
  Projects,
  SignIn,
  SignUp,
} from "./pages/index";
import {
  FooterCom,
  Header,
  OnlyAdminPrivateRoute,
  PrivateRoute,
} from "./components/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
