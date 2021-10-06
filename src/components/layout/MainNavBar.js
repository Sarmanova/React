import {useContext} from 'react'
import { Link } from 'react-router-dom'
import classes from '../layout/MainNavBar.module.css'
import FavoritesContext from '../store/favorites-context';
function MainNavBar() {
    const favoritesCtx = useContext(FavoritesContext);
    return (<header className={classes.header}>
        <div className={classes.logo}>  React Meetups</div>
        <ul>
            <li>
               <Link to ='/'>All Meetup</Link>
            </li>
            <li>
                <Link to='/new-meetup'>Add New Meetup</Link>
            </li>
            <li>
                <Link to='/favorites'> My Favorites
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                </Link>
            </li>
        </ul>
    </header>
    )
}

export default MainNavBar
