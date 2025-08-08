import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useCart } from "../../../context/cartContext"; // adjust import if needed

export default function CartButton() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cms/cart" passHref>
      <IconButton color="inherit" size="large">
        <Badge badgeContent={itemCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
}
