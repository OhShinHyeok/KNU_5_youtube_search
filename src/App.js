import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './css/style.css';
import YTSearch from "youtube-api-search";
const API_KEY = "--API 키를 입력하세요--";



class App extends Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null,
            searchVal: ''
        };

        this.videoSearch = this.videoSearch.bind(this);
    }

    videoSearch(searchVal) {
        console.log(searchVal);
        YTSearch({key: API_KEY, term: searchVal}, videos => {
            this.setState({videos});
        })
    }

    render() {
        const name = this.state.name;
        return (
            <div id="container">
                <header>
                    <h1>유투브 <span>검색</span></h1>
                    <p>보고싶은 동영상을 찾아보세요!</p>
                    <p>강원대학교 컴퓨터정보통신공학전공 5조</p>
                </header>
                <section>
                    <form id="search-form" method="get" action="">
                        <div className="fieldcontainer">
                            <SearchBar type="search" id="query" name="query" className="search-field"  placeholder="Search YouTube"
                                       onSearch={this.videoSearch}
                            />
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                            />
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

/*
 <div>
                <SearchBar
                    onSearch={this.videoSearch}
                />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                />
                <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
 */

/*
    render() {
        const name = this.state.name;
        return (
            <div id="container">
                <header>
                    <h1>Search <span>Videos</span></h1>
                    <p>Search all YouTube Videos</p>
                </header>
                <section>
                    <form id="search-form" method="get" action="">
                        <div className="fieldcontainer">
                            <input type="search" id="query" name="query" className="search-field"
                                   placeholder="Search YouTube"/>
                            <input type="submit" name="search-btn" className="search-btn" value="검색" onClick={this.search()}/>
                            <p>{this.state.videos}</p>
                        </div>
                    </form>
                    <ul id="results" className="item-list">
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
                    </ul>
                </section>
            </div>
        );
    }
}

<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Greeting name = {this.state.name}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
 */
export default App;
