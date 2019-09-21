import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Visual Studio Code Github Setup
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.item) {
      const newItem = { id: this.state.id, title: this.state.item };
      const updatedItems = [...this.state.items, newItem];

      this.setState({
        items: updatedItems,
        id: uuid(),
        item: '',
        editItem: false
      });
    }
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
