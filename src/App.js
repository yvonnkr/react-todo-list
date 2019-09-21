import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Visual Studio Code Github Setup
class App extends Component {
  state = {
    items: [{ id: 1, title: 'wake up' }, { id: 2, title: 'shopping' }],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    console.log('handleChange');
  };

  handleSubmit = e => {
    console.log('handleSubmit');
  };

  handleDelete = id => {
    console.log(`handleDelete ${id}`);
  };

  handleEdit = id => {
    console.log(`handleEdit ${id}`);
  };

  clearList = () => {
    console.log('clearList');
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
            <i className='fas fa-book'></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
