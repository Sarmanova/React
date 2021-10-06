import React from 'react'
import style from './Layout.module.css'
import MainNavBar from './MainNavBar'
function Layout(props) {
    return (
        <div >
            <MainNavBar />
            <main className={style.main}>{ props.children}</main>
        </div>
    )
}

export default Layout
