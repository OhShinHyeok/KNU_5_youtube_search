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

export default App;
