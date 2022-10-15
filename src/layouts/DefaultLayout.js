import Header from "../components/Header";
import List from "../components/List";
function DefaultLayout({ children }) {
  return (
    <div className="bg-gray-100 w-screen min-h-full relative">
      <Header />

      {children}

      <List />
    </div>
  );
}

export default DefaultLayout;
