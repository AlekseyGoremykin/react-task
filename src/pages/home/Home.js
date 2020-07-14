import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import './home.css';
import SadFace from './face.svg'
 
class Home extends React.Component {

  render() {
    const { reactSubreddit } = this.props;
    console.log(reactSubreddit)

    if (!reactSubreddit) {
      return (
        <p>Loading...</p>
      );
    }

    if (!reactSubreddit.data) {
      return (
        <div>
          <p>No such subreddit...</p>
          <img src={SadFace}/>
        </div>
      );
    }

    return (
      <section className = "mainContent">
        <div>
        {reactSubreddit.data.children.map(child => (
          <div className ="contentItem" key={child.data.id}>
            <p className = "authorName">Posted by u/{child.data.author}</p>
            <h2>{child.data.title}</h2>
            <p>{child.data.selftext}</p>
            <p className="comments">{child.data.num_comments} Comments</p>
          </div>
        ))}
        </div>
      </section>
    );
  }
}

export default withRedditApi(Home);
