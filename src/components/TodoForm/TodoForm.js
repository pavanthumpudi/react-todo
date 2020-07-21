// Todo.js
import React, {Component} from 'react';
import './TodoForm.css';
import Todo from '../Todo/Todo'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(localStorage.getItem('todos'))
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
       
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
                var updated_list = prevState.items.concat(newItem)
                return { 
                    items: updated_list
                };
            },
            () => {
              localStorage.setItem("todos", JSON.stringify(this.state.items));
            });
           
            this._inputElement.value = "";
        }
           
        console.log(this.state.items);
             
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key);
        });
    
        this.setState({
            items:filteredItems
        },
        () => {
          localStorage.setItem("todos", JSON.stringify(this.state.items));
        });

    }

    render() {
        return (
            <>
            <Todo entries={this.state.items} delete={this.deleteItem} />
            <div className="TodoForm">
                <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}  placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
                </div>
            </div>
            
            </>
        );
    }
}
export default TodoForm;