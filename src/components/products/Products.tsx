import React from 'react';
import { Row, Col } from 'antd';
import styles from './Products.module.scss';
import ProductItem from './ProductItem';
import { Spin } from 'antd';

interface PropsType {
  title: string | JSX.Element;
  products: any[];
  sideImage: string;
}

export const Products: React.FC<PropsType> = (props) => {
  const { title, products, sideImage } = props;
  return (
    <div className={styles.content}>
      <h2>{title}</h2>
      {
        products.length > 0 ? (
          <Row>
          <Col span={4}>
            <img className={styles['side-image']} src={sideImage} alt=""/>
          </Col>
          <Col span={20}>
            <Row>
              <Col span={12}>
                <ProductItem product={products[0]} size={'large'}/>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={12}>
                    <ProductItem product={products[1]}/>
                  </Col>
                  <Col span={12}>
                    <ProductItem product={products[2]}/>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <ProductItem product={products[3]}/>
                  </Col>
                  <Col span={12}>
                    <ProductItem product={products[4]}/>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <ProductItem product={products[5]}/>
              </Col>
              <Col span={6}>
                <ProductItem product={products[6]}/>
              </Col>
              <Col span={6}>
                <ProductItem product={products[7]}/>
              </Col>
              <Col span={6}>
                <ProductItem product={products[8]}/>
              </Col>
            </Row>
          </Col>
        </Row>
        ) : <Spin/>
      }
    </div>
  );
};
