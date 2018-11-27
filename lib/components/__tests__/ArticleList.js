import React from 'React';
import ArticleList from '../ArticleList';

import render from 'react-test-renderer';

describe('ArticleList', ()=>{
  it('should render properly', ()=>{
    const testProps={
      articles:{
        a:{id:'a'},
        b:{id: 'b'}
      },
      articleActions:{
        lookupAuthor: jest.fn(()=>({}))
      }
    };
    const tree = render.create(<ArticleList 
      {...testProps}/>).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});