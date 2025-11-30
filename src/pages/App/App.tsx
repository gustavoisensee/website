import Header from "../../components/app/Header";
import SideMenu from "../../components/app/SideMenu";
import Content from "../../components/app/Content";
import "./styles.css";

const App = () => (
  <div className="w-full max-w-2xl py-8 px-4">
    <SideMenu />
    <Header />
    <main role="main">
      <Content />
    </main>
  </div>
);

export default App;
