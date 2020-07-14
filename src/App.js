import React from 'react';
import { withRedditApi } from 'hooks/useRedditApi';
import Pages from 'pages';
import Header from 'components/Header/header';
import Title from 'components/Title/title';

class App extends React.Component {
  state = {
    reactSubreddit: null,
  }

  fetchSubreddits = async (src = 'react') => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/r/react/subreddits/search?q=${src}`).then(res => res.json());
    console.log(data)
    this.setState({ reactSubreddit: data });
    console.log(data)
  }

  render() {
    return (
      <main>
        <header>
          <Header fetchSubreddits={this.fetchSubreddits} />
          <Title />
        </header>
        <section>
          <Pages reactSubreddit={this.state.reactSubreddit} />
        </section>
      </main>
    );
  }
    
}

export default withRedditApi(App);
