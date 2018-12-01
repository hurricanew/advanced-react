import React from 'React';
import ArticleList from '../ArticleList';

// import render from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('ArticleList', ()=>{
  it('should render properly', ()=>{
    const testProps={
      articles:{
        a:{id:'a'},
        b:{id: 'b'}
      }
    };
    const wrapper = shallow(<ArticleList 
      {...testProps}/>);
    expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper).toMatchInlineSnapshot();
  });
});