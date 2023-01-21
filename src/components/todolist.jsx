import React, { Component } from 'react';
import '../styles/todolist.css'
import NOTODSTOSHOW from './notodsToShow'

class todolist extends Component {

    constructor(props) {
        super();
        this.state = {
            inputValue: "",
            todoItemList: []
        }
    }


   //var ES6 let,const

    OnAddClick = () => {

        let value = this.state.inputValue;
   
        if (value !== '') 
        {

            //const ab = [...this.state.todoItemList]  
            //const todos = [...this.state.todoItemList];

            const todos = [...this.state.todoItemList]

            todos.push(
                {
                    id: todos.length + 1,
                    name: value
                }
            );

            this.setState({ inputValue: "", todoItemList: todos })

            //$('#TODOTABLE').append(todoItemList)


        } else {
            alert("Please Add Todo Text");
        }
    }

    OnClearDataClick = () => {
        this.setState({ inputValue: '', todoItemList: [] });
    }

    handleChange = e => {
        console.log(e);
        this.setState({ inputValue: e.target.value });
    };

    onDeleteTask = (itemId) => 
    {
        this.setState({
            todoItemList: [...this.state.todoItemList].filter((id) => id.id !== itemId),
        });
    };

    render() {


        console.log('STATE',this.state)


        return (
            <>
                <h1>TO DO APP</h1>
                <div className="TodoCard">
                    <div>
                        <div className="divHeader">
                            <div className="divHeaderItemSearch">
                                <input className="search"
                                    type="text"
                                    placeholder='Plese Fill TODO Item'
                                    value={this.state.inputValue}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="divHeaderItemButton">
                                <input type="button"
                                    className="btnAdd"
                                    defaultValue="ADD"
                                    onClick={this.OnAddClick}
                                />
                                <input type="button"
                                    className="btnClearData"
                                    defaultValue="REMOVE ALL"
                                    onClick={this.OnClearDataClick}
                                />
                            </div>
                        </div>
                        <div className="data">
                            <ul>
                                {this.state.todoItemList.length === 0 ? (<NOTODSTOSHOW />) :
                                    this.state.todoItemList.map((item) => (
                                        <li key={item.id}> {item.id} : {item.name}
                                            <button style={{width: '110px', 
                                                        backgroundColor: '#f23737', 
                                                        padding: '10px', 
                                                        borderRadius: '5px', 
                                                        color: 'white', 
                                                        border: 'none', 
                                                        height: '40px', 
                                                        marginLeft:'53%',
                                                        fontWeight: 'bold'}} 
                                                    onClick={() => this.onDeleteTask(item.id)}>Remove</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div></div>
            </>
        );
    }
}

export default todolist;