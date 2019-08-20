import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duratiuons: '4:05' },
        { title: 'Macarena', duratiuons: '2:30' },
        { title: 'All Star', duratiuons: '3:15' },
        { title: 'I Want It That Way', duratiuons: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
