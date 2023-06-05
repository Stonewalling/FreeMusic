/*
 * @Author: David
 * @Date: 2023-06-03 10:18:04
 * @LastEditTime: 2023-06-03 13:36:46
 * @LastEditors: David
 * @Description: 增删左侧菜单栏
 * @FilePath: \music\src\components\leftMenu\changeMenu.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { forwardRef, useImperativeHandle, useState } from "react"
import { Menu } from "antd"
const { SubMenu } = Menu

export interface MenuDataItem {
  title: string
  key: string
  children?: MenuDataItem[]
}

const initialMenuData: MenuDataItem[] = [
  {
    title: "平台聚合",
    key: "plate",
    children: [{ title: "精选歌单", key: "plateForm" }],
  },
  {
    title: "我的音乐",
    key: "myMusic",
    children: [],
  },
  {
    title: "创建的歌单",
    key: "myMusicForm",
    children: [],
  },
]

const defaultOpenKeys = initialMenuData.map((item) => item.key)

interface SidlerMenuProps {}

export interface SidlerMenuRef {
  addSubMenuItem: (menuKey: string, subMenu: MenuDataItem) => void
}

const SidlerMenu = forwardRef<SidlerMenuRef, SidlerMenuProps>((props, ref) => {
  const [menuData, setMenuData] = useState(initialMenuData)
  // 定义一个函数来在指定的菜单下添加子菜单
  const addSubMenuItem = (menuKey: string, subMenu: MenuDataItem) => {
    setMenuData((prevMenuData) =>
      prevMenuData.map((menu) => {
        if (menu.key === menuKey) {
          return {
            ...menu,
            children: [...(menu.children || []), subMenu],
          }
        }
        return menu
      })
    )
  }

  useImperativeHandle(ref, () => ({
    addSubMenuItem,
  }))

  return (
    <>
      <Menu
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={["plateForm"]}>
        {menuData.map((menu) => (
          <SubMenu key={menu.key} title={menu.title}>
            {menu.children?.map((submenu) => (
              <Menu.Item key={submenu.key}>{submenu.title}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  )
})

export default SidlerMenu
