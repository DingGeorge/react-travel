import React from 'react';

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
  const { product, size= 'small' } = props;
  const { title, price, touristRoutePictures } = product;
  const imageStyle = {
    width: size === 'small' ? '240px' : '490px',
    height: size === 'small' ? '120px' : '285px',
  }
  return (
    <div>
      <img style={imageStyle} src={touristRoutePictures[0].url} alt='' />
      <span>{title.slice(0, 25)}</span>
      <span>{price}</span>
    </div>
  )
}
export default ProductItem
