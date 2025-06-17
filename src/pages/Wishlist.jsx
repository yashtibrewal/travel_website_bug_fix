import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="p-2 border-b">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.city}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
