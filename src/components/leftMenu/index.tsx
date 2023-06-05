/*
 * @Author: David
 * @Date: 2023-05-30 21:19:17
 * @LastEditTime: 2023-06-03 16:58:38
 * @LastEditors: David
 * @Description:
 * @FilePath: \music\src\components\leftMenu\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */
import "./index.scss"
import SidlerMenu, { MenuDataItem, SidlerMenuRef } from "./changeMenu"
import { useRef } from "react"

export default function LeftMenu() {
  const menuRef = useRef<SidlerMenuRef>(null)
  const handAddMenuItem = (menuKey: string, subMenu: MenuDataItem) => {
    menuRef.current?.addSubMenuItem(menuKey, subMenu)
  }

  return (
    <div className="left-menu-wrapper">
      <SidlerMenu ref={menuRef}></SidlerMenu>
    </div>
  )
}
