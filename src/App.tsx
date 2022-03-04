import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import TheGuide from "./components/guide/TheGuide";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AuthContext from "./auth-context";

// inspiration site: https://uvodo.com/?ref=land-book.com

const App: React.FC = () => {
  const ctx = useContext(AuthContext);

  useEffect(() => {
    ctx.getResourceTable();
    ctx.getPortfolioTable();
  }, []);

  useEffect(() => {
    ctx.checkAdminLoggedIn();
    ctx.checkUserLoggedIn();
  }, [ctx.adminLoggedIn, ctx.userLoggedIn, ctx.signInWithGoogle, ctx.signout]);

  useEffect(() => {
    ctx.getBlogTable();
  }, [ctx.orderByAsc, ctx.refreshBlogDb]);

  return (
    <main className="md:mx-16 mx-8 font-poppins ">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theguide" element={<TheGuide />} />
          <Route path="/brettsmith-portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
};

export default App;
