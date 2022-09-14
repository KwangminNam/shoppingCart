import { useState } from "react";
import { Card , Button } from "react-bootstrap";
import formatCurrency from "../utillites/formatCurrency";

type StoreItemProps = {
  id:number,
  name:string,
  price:number,
  imgUrl:string
}
const StoreItem = ({id,name,price,imgUrl} : StoreItemProps) => {

  let quanitiy = 1;

  const [num,setNum] = useState(0);
  const addProduct = () => {
    setNum(prev=>prev+1);
  }

  return (
    <Card className="h-100">
      <Card.Img 
        variant="top"
        src={imgUrl}
        height="200px"
        style={{objectFit:"cover"}} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {num === 1 ? 
            (<Button className="w-100">+Add to Cart</Button>)
          : <>
              <Button onClick={addProduct}>ADD</Button>
            </>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;