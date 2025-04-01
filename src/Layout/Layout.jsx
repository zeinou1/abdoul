import Header from "../Components/Header/Header";
import Routers from "../router/Routers";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <main className="z-5">
        <Routers />
      </main>
    </div>
  );
};
export default Layout;
