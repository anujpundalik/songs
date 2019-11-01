import React from 'react';
import {connect} from 'react-redux'; 

const SongDetail = ({song}) => {

    if (!song){
        return <div> Select a song </div>
    }

    return (

        <div> 
            <h3> {song.title}</h3>
            <p> Duration : {song.duration} </p>
        </div>
    );
};

const mapStatetoProps = (state) => {

    return {song : state.selectedSong}
};
export default connect(mapStatetoProps)(SongDetail);