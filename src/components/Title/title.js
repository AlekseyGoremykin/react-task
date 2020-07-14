import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import "./title.css";
import ReactLogo from './reactLogo.svg'

class Title extends React.Component {
  state = {
    reactSubreddit: null,
  }

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit('/r/dog/about').then(res => res.json());
    this.setState({ reactSubreddit: data });
    console.log(data)
  }

  render() {
    const { reactSubreddit } = this.state;

    if (!reactSubreddit) {
      return null;
    }
      return (
        <div>
          <div>
            <div className="orangeTitlePanel">
            </div>
            <div className="title">
            <img className="subredditLogo" src={reactSubreddit.data.icon_img || ReactLogo} />
              <h1>
                {reactSubreddit.data.title}
                <p className="displayNamePrefix" >{reactSubreddit.data.display_name_prefixed}</p>
              </h1>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default withRedditApi(Title);