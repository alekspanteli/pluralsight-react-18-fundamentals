import Banner from "./banner";
import HouseList from "./houseList";

const App = () => {
  const jsx = <div>Tittle goes here</div>;
  return (
    <>
      <Banner>{jsx}</Banner>
      <HouseList />
    </>
  );
};

export default App;
