import React from 'react';
// import {data} from '../testData';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './TimeStamp';

import Perf from 'react-addons-perf';
if(typeof window !== 'undefined'){
  window.Perf = Perf;
}



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
  onStoreChange(){
    this.setState(this.props.store.getState());
  }
  componentDidMount(){
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange.bind(this));
    this.props.store.startClock();
  }
  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }
  shouldComponentUpdate(nextProps, nextState){
    return(nextState.articles!==this.state.articles || nextState.searchTerm !== this.state.searchTerm);
  }
  render(){
    let { articles, searchTerm} = this.state;
    if(searchTerm){
      articles=pickBy(articles, (value)=>{
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <div>
        <Timestamp timestamp={this.state.timestamp}/>
        <SearchBar doSearch={this.props.store.setSearchTerm}/>
        <ArticleList articles={articles} 
          store={this.props.store}
        />
      </div>
       
    );
  }
}
export default App;