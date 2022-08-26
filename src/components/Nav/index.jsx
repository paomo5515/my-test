import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import styles from './index.module.css';

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type
  };
}

function Nav() {
  let location = useLocation();
  const [menuName, setMenuName] = useState('');
  const [menuName1, setMenuName1] = useState('子菜单 1-1');
  const [menuName2, setMenuName2] = useState('子菜单 1-2');
  const [menuName3, setMenuName3] = useState('子菜单 2-1');
  const [menuName4, setMenuName4] = useState('子菜单 2-2');

  const items = [
    getItem('菜单一', 'sub1', [
      getItem(
        <NavLink to='/sub11' state={menuName1}>
          {menuName1}
        </NavLink>,
        '1-1'
      ),
      getItem(
        <NavLink to='/sub12' state={menuName2}>
          {menuName2}
        </NavLink>,
        '1-2'
      )
    ]),
    getItem('菜单二', 'sub2', [
      getItem(
        <NavLink to='/sub21' state={menuName3}>
          {menuName3}
        </NavLink>,
        '2-1'
      ),
      getItem(
        <NavLink to='/sub22' state={menuName4}>
          {menuName4}
        </NavLink>,
        '2-2'
      )
    ])
  ];
  const changeMenuName = () => {
    console.log(location);
    if (menuName === '') {
      alert('输入的菜单名不能为空');
      return;
    }
    switch (location.pathname) {
      case '/sub11':
        setMenuName1(menuName);
        break;
      case '/sub12':
        setMenuName2(menuName);
        break;
      case '/sub21':
        setMenuName3(menuName);
        break;
      case '/sub22':
        setMenuName4(menuName);
        break;
      default:
        console.log('路径不存在');
        break;
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.menu}>
        <Menu
          defaultSelectedKeys={['1-1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          items={items}
        />
      </div>
      <div className={styles.changeMenu}>
        <div className={styles.main}>
          <Outlet />
        </div>
        <input type='text' onChange={(e) => setMenuName(e.target.value)} />
        <button onClick={changeMenuName}>确定</button>
      </div>
    </div>
  );
}

export default Nav;
