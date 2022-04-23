import { Menu } from 'antd';
import React from 'react';
import {sideMenuList} from '../../mock/sideMenu';
import styles from './SideMenu.module.scss';
import {GifOutlined} from '@ant-design/icons';

export const SideMenu: React.FC = (props) => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`side-menu-${m.id}`}
          title={
            <span>
              <GifOutlined />
              {m.title}
            </span>
          }
        >
          {m.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${m.id}-${smindex}`}
              title={
                <span>
                  <GifOutlined />
                  {sm.title}
                </span>
              }
            >
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item key={`sub-sub-menu-${m.id}-${smindex}-${smsindex}`}>
                  <span>
                    <GifOutlined />
                    {sms}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
}
