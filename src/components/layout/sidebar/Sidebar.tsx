import React from 'react'
import styles from './Sidebar.module.scss'

type SidebarProps = {
    children: React.ReactNode
}

const Sidebar = ({children}:SidebarProps) => {
  return (
    <aside className={styles["sidebar-container"]}>
        <h2>Genres</h2>
        <div className={styles["genres-container"]}>
            {children}
        </div>
    </aside>
  )
}

export default Sidebar