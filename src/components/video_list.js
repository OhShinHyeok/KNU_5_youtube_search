import React from 'react';
import VideoItem from './video_item';
import '../css/style.css'
const VideoList = ({videos, onVideoSelect}) => {
    const videoItems = videos.map(video => {
        return(
            <VideoItem
                key={video.etag}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        );
    })

    return (
        <ul id="results" className="item-list">
            {videoItems}
        </ul>
    )
}
/*
<ul id="results" className="item-list">

                    </ul>
 */
export default VideoList;