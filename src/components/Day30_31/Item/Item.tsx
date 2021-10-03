import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../AppType';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} className="day30_img"/>
    <div className="day30_item">
      <h3>{item.title}</h3>
     
      <h3>${item.price}</h3>
    </div>
    <Button className="day30_btn1" onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;