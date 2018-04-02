import React from 'react';
import Album from './Album/Album';

//import { Box, Card } from 'reactbulma';



const ContentPanel = (props) => {
    
    const { tracksRetrieved } = props;
    
    
    const albumMap = tracksRetrieved.map( (value, index) => {
        return (
            <div key={ index }>
                <Album trackData={ value }
                addToPlaylist={ props.addToPlaylist }/>
                {/* playBtn={ props.playBtn }   */}
            </div>
        )
    })

    return (
        <div>
            { albumMap }
            {/* <Album/> */}
        </div>
    )
}

export default ContentPanel;