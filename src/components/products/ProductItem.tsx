import React from 'react';
import {useNavigate} from 'react-router-dom';

interface TourRoutePicture {
  url: string
}
interface Product {
  id: number,
  title: string,
  price: string,
  touristRoutePictures: TourRoutePicture[],
}
interface ProductItemProps {
  size?: 'small' | 'large',
  product: Product
}
const ProductItem:React.FC<ProductItemProps> = props => {
  let navigate = useNavigate();

  const { product, size= 'small' } = props;
  const { id, title, price, touristRoutePictures } = product;
  const imageStyle = {
    width: size === 'small' ? '240px' : '490px',
    height: size === 'small' ? '120px' : '285px',
  }
  return (
    <div onClick={() => navigate(`/detail/${id}`)}>
      <img style={imageStyle} src={touristRoutePictures[0].url} alt='' />
      <span>{title.slice(0, 25)}</span>
      <span style={{color: 'red'}}>￥{price}</span>
    </div>
  )
}
export default ProductItem
