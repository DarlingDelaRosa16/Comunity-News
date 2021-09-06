import {React, useState, useContext} from 'react'
import CategoryContext from '../Contexs/categoryContext'
import axios from 'axios'
import { types } from '../Contexs/storeReducer'

const Login = (props) => {

    const [state, dispatch] = useContext(CategoryContext)
    const [sentenceComfirm, setSentenceConfirm] = useState('')

    const [data, setdata] = useState(
    {   userName: "",
        password: "" 
    })

    const handleInputChange = (e) =>{
        setdata({
            ...data, 
            [e.target.name] : e.target.value    
        })
    } 

    const validationDataUser = async () => {
        await axios.post(`https://comunity-news.herokuapp.com/checkUser`, data)
        .then(res => {
            if (res.data.items !== null) {
                    dispatch({
                        type: types.startSession,
                        enteringTheSession: {
                            user: res.data.items.userName,
                            id: res.data.items._id,
                            name: res.data.items.name,
                            role: res.data.items.role,
                            last_name: res.data.items.lastName
                        }
                    },dispatch({
                          type: types.comfirmButtonModalLogin,
                          confirmatedLogIn: {isLogIn: false}
                    }))
                
                props.validationSuccess.setNestedModal(!props.validationSuccess.nestedModal)

                const sentenceAnswerForm = '' 
                setSentenceConfirm(sentenceAnswerForm)
                
            }else{
                dispatch({
                    type: types.comfirmButtonModalLogin,
                    confirmatedLogIn: {isLogIn: false}
                })
                const sentenceAnswerForm = 'La contraseña o el ususario son incorrectos' 
                setSentenceConfirm(sentenceAnswerForm)
            }
        })
    }

    if (state.IsloginValidated.isLogIn) {
        validationDataUser()
    }

    return (
        <div className="container p-1 mb-2">
            <form  autoComplete="off">

                <div className="mb-2">
                    <input 
                        className="form-control "
                        type="text"
                        placeholder="Username"
                        name="userName"
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className="mb-2">
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleInputChange}
                    />
                </div>

            </form>
            <h6 className="text-danger"> { sentenceComfirm }</h6>
        </div>
    );
}
 
export default Login;
