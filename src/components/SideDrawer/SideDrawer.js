import React from 'react'
import './SideDrawer.css'

const sideDrawer = props => {
    let DrawerClasses = 'side-drawer'
    if (props.show){
        DrawerClasses = 'side-drawer open'
    }
    return(
        <nav className={DrawerClasses}>
            <ul>
                <li><a href="/">تسجيل الدخول</a></li>
                <li><a href="/">انشاء حساب جديد</a></li>
            </ul>
        </nav>
    )
}
    
export default sideDrawer;