// Style
import "./Layout.css";
// UI + Components
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ menu, children }) {
  return (
    <div className="layout">
      <Header menu={menu} />
      <main className="content">{children}</main>
      <Footer menu={menu} />
    </div>
  );
}
