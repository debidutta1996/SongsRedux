import React from 'react';
import { connect } from 'react-redux';

class SongDetails extends React.Component {
    render() {
        if(!this.props.song){
            return <div>Select a Song</div>
        }
        return (
            <div>
                <div>{this.props.song.title}</div>
                <div>{this.props.song.duration}</div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetails);
