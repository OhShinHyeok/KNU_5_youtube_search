import React from 'react';
import '../css/style.css'
const VideoItem = ({video, onVideoSelect}) => {
    var url = "https://www.youtube.com/watch?v="+video.id.videoId;
    return(
        <li className="item" onClick={() => onVideoSelect(video)}>
            <a href={url+video.id.videoId} target="_blank">
                <h3>{video.snippet.title}</h3>
                <div className="image-wrapper">
                    <img src={video.snippet.thumbnails.default.url}/>
                </div>
                <div className="description">
                    <small>By <span
                        className="channel-title">{video.snippet.channelTitle}</span> on <time>{video.snippet.publishedAt}</time>
                    </small>
                    <p>{video.snippet.description}</p>
                </div>
            </a>
        </li>
    )
    /*
    <li className="item">
                            <a href="http://www.youtube.com/watch?v=e3Nl_TCQXuw" target="_blank">
                                <h3>Beauty and the Beast – US Official Final Trailer</h3>
                                <div className="image-wrapper">
                                    <img src="https://i.ytimg.com/vi/e3Nl_TCQXuw/hqdefault.jpg"/>
                                </div>
                                <div className="description">
                                    <small>By <span
                                        className="channel-title">Disney Movie Trailers</span> on <time>2017-01-31T02:44:39.000Z</time>
                                    </small>
                                    <p>The final trailer for Beauty and the Beast is here On March 17, rediscover a tale as
                                        old as time. Get your tickets now at BeOurGuest.com -- Disney's “Beauty ...</p>
                                </div>
                            </a></li>
     */
}

export default VideoItem;