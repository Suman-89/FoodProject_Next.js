import { useCart } from "../../../context/cartContext";

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
