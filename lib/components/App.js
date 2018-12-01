import React from 'react';
// import {data} from '../testData';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';

// const api = new DataApi(data);

class App extends React.Component{
    static childContextTypes={
      store: PropTypes.object
    }
    getChildContext(){
      return {
        store: this.props.store
      };
    }
  state = this.props.store.getState();
  articleActions = {
    lookupAuthor: (authorid) => this.state.authors[authorid]
  }
  render(){
    return (
      <ArticleList articles={this.state.articles} 
        store={this.props.store}
      />
    );
  }
}
export default App;