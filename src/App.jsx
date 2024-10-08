import React from 'react';
import { Route } from 'react-router';
import Search from './Search';
import Homepage from './Homepage';
import Playlistpage from './Playlistpage';
import Videoplaying from './Videoplaying';
import Firstmodule from './Firstmodule';
import RatedPlaylist from './RatedPlaylist';
import ViewYourPlaylist from './ViewYourPlaylist';
import PlaylistPageWithoutRated from './PlaylistPageWithoutRated'
import EditProfilee from './EditProfilee';
function App()
{
    return (
        <>
       <Route path='/' component={Firstmodule} />
        <switches>          
             <Route exact path='/Homepage' component={Homepage} />
             <Route exact path='/Search' component={Search} />
             <Route  exact path='/Playlistpage/:id' component={Playlistpage} />
             <Route exact path='/Videoplaying/:id/:id1' component={Videoplaying} />
             <Route exact path='/rated' component={RatedPlaylist} />
             <Route exact path='/editprofile' component={EditProfilee} />
             <Route exact path='/yourplaylist' component={ViewYourPlaylist} />
             <Route exact path='/youroneplaylist/:id/:id1' component={PlaylistPageWithoutRated} />
             

        </switches> 
        </>
    );
}


export default App;
