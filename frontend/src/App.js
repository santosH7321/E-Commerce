import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <Header />
    <main className="min-h-[cal(100vh-120px)]">
         <Outlet />
    </main>
    <Footer />
   </>
  );
}

export default App;
