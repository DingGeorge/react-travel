import React from 'react';
import styles from './App.module.scss';
import { Header, Footer, SideMenu, Carousel, Products } from './components';
import {Col, Row} from 'antd';
import { productList1, productList2, productList3 } from './mock/products';

import sider_1 from './assets/images/sider_1.png';
import sider_2 from './assets/images/sider_2.png';
import sider_3 from './assets/images/sider_3.png';

function App() {
  return (
    <div className={styles.App}>
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

        <Products title={'爆款推荐'} products={productList1} sideImage={sider_1}/>
        <Products title={'新品上市'} products={productList2} sideImage={sider_2}/>
        <Products title={'国内游推荐'} products={productList3} sideImage={sider_3}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
