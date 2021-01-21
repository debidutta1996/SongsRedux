import {combineReducers} from 'redux';

const songReducer = () =>{
    return [
        {title:'masshala',duration:'2:15'},
        {title:'masshala1',duration:'3:15'},
        {title:'masshala2',duration:'4:15'},
        {title:'masshala3',duration:'5:15'}
    ];
}

const SelectedSongReducer = (selectedSong=null,action) =>{
    if(action.type === 'SELECTED_SONG'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
        songs:songReducer,
        selectedSong:SelectedSongReducer
    });