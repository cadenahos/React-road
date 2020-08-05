import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import { Search, Button, Table } from './App';

describe('App', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('has a valid snapshot', () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

});

describe ('Search', () => {

  if('renders without clashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should have equal snapshop search', () => {
    const component = renderer.create(
      <Search>Search</Search>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Give Me More</Button>, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should has a valid snapshot', () => {
    const component = renderer.create(
      <Button>Give Me More</Button>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});

describe('Table', () =>{

  const props = {
    list: [
      {title: '1', author: '1', num_comments:1, points:2, objetID: 'y'},
      {title: '2', author: '2', num_comments:1, points:2, ObjectID: 'z'}
    ],
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<table {...props } />, div);
  });

  test('should has a valid snapshot', () => {
    const component = renderer.create(
      <Table { ...props } />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
