import React from 'react';

const VideoDetail = ({selectedVideo}) => {

    if (!selectedVideo) {
        return ''
    }
    return (
        <div>
            {selectedVideo.snippet.channelTitle}
        </div>
    )
}

export default VideoDetail;