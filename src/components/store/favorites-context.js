import {
    createContext, useState
} from 'react'
//import Favorites from '../../pages/Favorites'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavoritie: (meetupId) => { },
    itemIsFavirite: (meetupId) => { }
});
 
 export function FavoritesContextProvider(props) {
     const [useFavorites, setUseFavorites] = useState([])

     const addFavoriteHandler = (favoriteMeetup) => {
         setUseFavorites((prevUseFavorites) => {
             return prevUseFavorites.concat(favoriteMeetup);
         });
        
     };
    
     const removeFavoritesHandler = (meetupId) => {
         setUseFavorites((prevUseFavorites) => {
             return prevUseFavorites.filter(meetup => meetup.id !== meetupId);
         }
        
         )
     };
     const itemIsFavirites = (meetupId) => {
         return useFavorites.some(meetup => meetup.id === meetupId);
     };
         
    
     const context = {
         favorites: useFavorites,
         totalFavorites: useFavorites.length,
         addFavorite: addFavoriteHandler,
         removeFavoritie: removeFavoritesHandler,
         itemIsFavirite: itemIsFavirites
     };

     return (<FavoritesContext.Provider value={context}>
         {props.children}
     </FavoritesContext.Provider>
     );
}

 
export default FavoritesContext;