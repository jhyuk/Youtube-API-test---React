import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = 'AIzaSyAXYfQDsDwrX5syNyXor66-g8jNUIwfl2c';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = { video : [] };

        YTSearch({
            key: API_KEY, term: 'surfboards'}, video => {
                this.setState({ video })
        });
        
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList video={this.state.video} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));