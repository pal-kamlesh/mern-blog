import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  CreatePost,
  Dashboard,
  Home,
  PostPage,
  Projects,
  Search,
  SignIn,
  SignUp,
  UpdatePost,
} from "./pages/index";
import {
  FooterCom,
  Header,
  OnlyAdminPrivateRoute,
  PrivateRoute,
  ScrollToTop,
} from "./components/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
