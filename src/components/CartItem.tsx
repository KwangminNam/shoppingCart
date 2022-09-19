import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItems from '../data/items.json'
import { Stack } from "react-bootstrap";


type CartItemsProps = {
  id:number,
  q:number
}

const CartItem = ({id,q} :CartItemsProps) => {

  const {removeQ} = useShoppingCart();
  const item = StoreItems.find( item => item.id === id );
  if(item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img src={item.imgUrl}  style={{width:'125px',height:'75px',objectFit:'cover'}} />
    </Stack>
  );
};

export default CartItem;