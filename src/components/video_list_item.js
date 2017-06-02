import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);

    this.video = this.props.video;
  }

  get imageUrl() { return this.video.snippet.thumbnails.default.url }

  render() {

    return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={this.imageUrl} alt=""/>
          </div>

          <div className="media-body">
            <div className="media-heading">{this.video.snippet.title}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default VideoListItem;