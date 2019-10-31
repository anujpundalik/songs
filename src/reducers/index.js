import {combineReducers} from 'redux';

const songsReducer = () => {

    return [

        {title: "Enter Sandman" , duration : '4:05'},
        {title: "Master Of Puppets" , duration : '5:57'},
        {title: "Nothing Else Matters" , duration : '4:23'},
        {title: "One" , duration : '5:07'}
        
    ];
};

const selectedSongReducer = (selectedSong = null, action) => { 

    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({ 
    songs : songsReducer,
    selectedSong : selectedSongReducer
 });