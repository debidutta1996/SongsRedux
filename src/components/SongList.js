import React from 'react';
import { connect } from 'react-redux';
import {selectsong} from '../actions';

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div key={song.title}>
                    <div>{song.title}</div>
                    <button onClick={()=>this.props.selectsong(song)}>Select</button>
                    <hr/>
                </div>
            );
        })
    }


    render(){ 
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) =>{
    return{
        songs:state.songs
    }
}


export default connect(mapStateToProps, {selectsong} )(SongList);