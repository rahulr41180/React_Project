
import "./AddTodo.css";

import { Link } from "react-router-dom";

import { MdDelete } from "react-icons/md";

import { useState, useEffect } from "react";

import { BiMessageSquareAdd } from "react-icons/bi";

import axios from "axios";

export const AddTodo = () => {

    const [formdata, setFormData] = useState({
        
        title : "",
        description : "",
        status : "",
        possible : "",
        date : "",
        task : [],
    })

    const [tasktext, setTaskText] = useState({
        task : "",
    });
    
    console.log('tasktext:', tasktext)
    const [task, setTask] = useState({
        task : []
    })
    console.log('task:', task.task)
    const handleChange = (event) => {
        
        const {name , value} = event.target;
        
        setFormData({
            ...formdata,
            
            [name] : value
        })
        
    }
    
    const handleTask = (event) => {
        const {name, value} = event.target;
        
        setTaskText({
            ...tasktext,
            [name] : value
        })
    }
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        setFormData({
            ...formdata,
            task : task,
        })
        console.log('formdata:', formdata)


        if(formdata.status === "Todo") {
            axios.post("http://localhost:8080/Todo", {
                formdata,
            })
            .then((res) => {
                console.log('res:', res)
            })
        }
        else if(formdata.status === "In Progress") {
            axios.post("http://localhost:8080/InProgress", {
                formdata,
            })
            .then((res) => {
                console.log('res:', res)
            })

        }
        else if(formdata.status === "Done") {
            axios.post("http://localhost:8080/Done", {
                formdata,
            })
            .then((res) => {
                console.log('res:', res)
            })

        }
    }
    
    const AddTask = () => {
        setTask({
            ...task,
            task : [...task.task, tasktext]
        })
        console.log('task:', task)
    }

    const DeleteTask = (id) => {

        console.log('task.task:', task.task)
        const Task = task.task
        Task.splice(id,1);
        console.log('Task:', Task)
        // console.log('Task:', Task)
        setTask({
            ...task,
            task : Task,
        })
    }
    
    return (
        <div className="container">
            <div className="LeftNavbar">
                <div><p>User details fetch from api mocker</p></div>
                <Link className="login" to="/">
                    <div>HOME</div>
                </Link>
                <Link className="login" to="/summary">
                    <div>SUMMARY</div>
                </Link>
                <Link className="login" to="/logout">
                    <div>LOGOUT</div>
                </Link>
            </div>
            <div className="Right__Box">
                <form onSubmit={handleSubmit} action="">
                    <div>

                        <div>
                            <input onChange = {handleChange} type="text" name="title" id="" placeholder="TITLE"/>
                        </div>
                        <div>
                            <textarea onChange = {handleChange} name="description" id="" cols="30" rows="5" placeholder="DESCRIPTION"></textarea>
                        </div>
                        <div>
                            <input onChange = {handleChange} type="radio" name="status" id="" value="Todo" /> Todo
                            <br />
                            <input onChange = {handleChange} type="radio" name="status" id="" value = "In Progress" /> In Progress
                            <br />
                            <input onChange = {handleChange} type="radio" name="status" id="" value = "Done" /> Done
                        </div>
                        <div>
                            Tag(Multiple Possible)
                            <br />
                            <input onChange = {handleChange} type="checkbox" name="possible" id="Official" value = "Official" /> Official
                            <br />
                            <input onChange = {handleChange} type="checkbox" name="possible" id="Personal" value = "Personal"/> Personal
                            <br />
                            <input onChange = {handleChange} type="checkbox" name="possible" id="Others" value = "Others" /> Others
                        </div>
                    </div>

                    <div>
                        <div>
                            <input onChange={handleTask} name="task" type="text" placeholder="_____________"/>
                            <BiMessageSquareAdd onClick={() => {
                                AddTask();
                            }} style={{height : "2.5vw", border : "1px solid", fontSize : "1.4vw", width : "15%", cursor : "pointer"}} />
                        </div>
                        
                        <div>
                            {task.task.map((element,index) => {
                                return (
                                    <div key={index}>
                                        <input type="checkbox" name="task" id="" value={""} />
                                        <label htmlFor="">{element.task} : {index + 1}</label>
                                        <MdDelete onClick={() => {
                                            console.log('index:', index)
                                            DeleteTask(index);
                                        }} style={{height : "2vw", border : "1px solid", fontSize : "1.4vw", width : "10%", cursor : "pointer"}} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <input onChange = {handleChange} type="date" name="date" id="" />
                        <input type="submit" value="CREATE A NEW TASK" />
                    </div>
                </form>
            </div>
        </div>
    )

}