// Todo.js
import React, {Component} from 'react';
import FlipMove from "react-flip-move";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'

import './Todo.css';

class todo extends Component { 
    constructor (props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
        
    }
    createTasks(item) {
        return <li key={item.key}>{item.text} 
          <button onClick={() => this.delete(item.key)} type="button">          
            <FontAwesomeIcon icon={faTrash} />
          </button> 
          </li>
    }
    delete(key) {
        this.props.delete(key);
    }
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="theList">
          <FlipMove duration={500} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      );
    }
  };

export default todo;