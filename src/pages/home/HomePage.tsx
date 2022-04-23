import React, {useEffect} from 'react';
import styles from './HomePage.module.scss';
import {Carousel, Footer, Header, Products, SideMenu} from '../../components';
import {Col, Row} from 'antd';
import sider_1 from '../../assets/images/sider_1.png';
import sider_2 from '../../assets/images/sider_2.png';
import sider_3 from '../../assets/images/sider_3.png';
import { useSelector } from '../../redux/hooks';
import {useDispatch} from 'react-redux';

import {fetchProductsActionCreator} from '../../redux/product/productActions';
import {ThunkDispatch} from 'redux-thunk';

export const HomePage:React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const products = useSelector(state => state.product);
  console.log('products', products);
  useEffect(() => {
    dispatch(fetchProductsActionCreator());
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      {/*主页面*/}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>

        <Products title={'爆款推荐'} products={products.p1} sideImage={sider_1}/>
        <Products title={'新品上市'} products={products.p2} sideImage={sider_2}/>
        <Products title={'国内游推荐'} products={products.p3} sideImage={sider_3}/>
      </div>
      <Footer />
    </div>
  );
};
