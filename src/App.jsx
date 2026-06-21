import "./App.css";
import NavBar from "./layout/NavBar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./layout/footerBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
