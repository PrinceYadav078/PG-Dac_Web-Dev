import Card from "./Card";
const Allcards = () => {
  return (
    <div className="container  p-2 mt-5">
      <div className="row" style={{"justify-content": "space-around"}}>
        <Card name="Product-1"/>
        <Card name="Product-2" />
        <Card name="Product-3" />
        <Card name="Product-4" />
      </div>
    </div>
  );
};

export default Allcards;
