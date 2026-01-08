import ScrollSection from "./components/ScrollSection";
import NextContentSection from "./components/NextContentSection";
import PeopleInteractionSection from "./components/usersComponent";
import "./App.css";

function App() {
  return (
    <>
      {/* Hero / Body Section */}
      <ScrollSection />
      <NextContentSection />
      <NextContentSection />
      <PeopleInteractionSection />
    </>
  );
}

export default App;
