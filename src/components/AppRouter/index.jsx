import { Route, Routes } from "react-router-dom";
import Comment from "../../pages/Comment";
import Home from "../../pages/Home";
import Counter from "../../pages/Counter";
import Todo from "../../pages/Todo";
import Product from "../../pages/Product";
import Profile from "../../pages/Profile";
import Weather from "../../pages/Weather";
import ButtonsPages from "../../pages/ButtonsPage";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<Todo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/buttons" element={<ButtonsPages />} />
    </Routes>
  );
}

export default AppRouter;
