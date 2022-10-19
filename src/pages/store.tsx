import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

export default function Store() {
  return (
    <div className="mx-4 sm:mx-0">
      <h1>Store</h1>
      <div className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {storeItems.map((item) => (
          <StoreItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}
