import React from 'react';
import { Row, Col } from 'antd';
import styles from './Products.module.scss';
import ProductItem from './ProductItem';
import {productList1} from '../../mock/products';

interface PropsType {
  title: string | JSX.Element;
  products: any[];
  sideImage: string;
}

export const Products: React.FC<PropsType> = (props) => {
  const { title, products, sideImage } = props;
  console.log(products);
  return (
    <div className={styles.content}>
      <h2>{title}</h2>
      <Row>
        <Col span={4}>
          <img className={styles['side-image']} src={sideImage} alt=""/>
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
                <ProductItem product={productList1[0]} size={'large'}/>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductItem product={productList1[1]}/>
                </Col>
                <Col span={12}>
                  <ProductItem product={productList1[2]}/>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductItem product={productList1[3]}/>
                </Col>
                <Col span={12}>
                  <ProductItem product={productList1[4]}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductItem product={productList1[5]}/>
            </Col>
            <Col span={6}>
              <ProductItem product={productList1[6]}/>
            </Col>
            <Col span={6}>
              <ProductItem product={productList1[7]}/>
            </Col>
            <Col span={6}>
              <ProductItem product={productList1[8]}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
