
import "./TodoList.css";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

export const TodoList = () => {

    const store = useSelector((store) => store);
    console.log('store:', store)
    const isAuth = store.IsAuth.isAuth
    console.log('isAuth:', isAuth)
    return (
        <div className="container">
            <div className="LeftNavbar">
                <Link style={{marginBottom : ".5vw"}} className="login" to="/addTodo">
                    <div>ADD TODO</div>
                </Link>
                {isAuth === "Token is not available" ?

                    <Link className="login" to="/login">
                        <div>LOGIN</div>
                    </Link> 
                :

                    <Link className="login" to="/logout">
                        <div>LOGOUT</div>
                    </Link>
                }
            </div>
            <div className="Right__Box">
                
                <div id="Todo__Box">
                    <div>TODO</div>
                    <div>
                        <div>
                            <p style={{marginBottom : ".5vw"}}>Lorem.</p>
                            <div style={{marginBottom : ".5vw"}}>
                                <p>Lorem.</p>
                                <p>Lorem.</p>
                            </div>
                            <p style={{marginBottom : ".5vw"}}>Lorem ipsum dolor sit amet.</p>
                            <div>
                                <div>
                                    <input className="checkbox" type="checkbox" name="task" id="" value={""} />
                                    <label htmlFor="" id="task">Lorem.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Todo__Box">
                <div>In Progress</div>
                    <div>
                        <div>
                            <p style={{marginBottom : ".5vw"}}>Lorem.</p>
                            <div style={{marginBottom : ".5vw"}}>
                                <p>Lorem.</p>
                                <p>Lorem.</p>
                            </div>
                            <p style={{marginBottom : ".5vw"}}>Lorem ipsum dolor sit amet.</p>
                            <div>
                                <div>
                                    <input className="checkbox" type="checkbox" name="task" id="" value={""} />
                                    <label htmlFor="" id="task">Lorem.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Todo__Box">
                <div>DONE</div>
                    <div>
                        <div>
                            <p style={{marginBottom : ".5vw"}}>Lorem.</p>
                            <div style={{marginBottom : ".5vw"}}>
                                <p>Lorem.</p>
                                <p>Lorem.</p>
                            </div>
                            <p style={{marginBottom : ".5vw"}}>Lorem ipsum dolor sit amet.</p>
                            <div>
                                <div>
                                    <input className="checkbox" type="checkbox" name="task" id="" value={""} />
                                    <label htmlFor="" id="task">Lorem.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}