/*
 * @Author: David
 * @Date: 2023-06-03 10:18:04
 * @LastEditTime: 2023-06-06 15:52:02
 * @LastEditors: David
 * @Description: 增删左侧菜单栏
 * @FilePath: /FreeMusic/src/components/leftMenu/changeMenu.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { ReactElement, forwardRef, useImperativeHandle, useState } from "react"
import { CustomerServiceOutlined } from "@ant-design/icons"
import { Menu } from "antd"

export interface MenuDataItem {
  type?: string
  label: string
  key: string
  children?: MenuDataItem[]
  icon?: ReactElement
}

let initialMenuData: MenuDataItem[] = [
  {
    type: "group",
    label: "平台聚合",
    key: "plate",
    children: [
      {
        label: "精选歌单",
        key: "plateForm",
        icon: <CustomerServiceOutlined rev={undefined} />,
      },
    ],
  },
  {
    type: "group",
    label: "我的音乐",
    key: "myMusic",
    children: [],
  },
  {
    type: "group",
    label: "创建的歌单",
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
        defaultSelectedKeys={["plateForm"]}
        items={initialMenuData}></Menu>
    </>
  )
})

export default SidlerMenu
