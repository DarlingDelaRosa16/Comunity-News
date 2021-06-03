import {React, useState, useContext} from 'react'
import CategoryContext from '../Contexs/categoryContext'
import axios from 'axios'
import { types } from '../Contexs/storeReducer'
import md5 from 'md5'

const Login = (props) => {

    const [state, dispatch] = useContext(CategoryContext)
    const [sentenceComfirm, setSentenceConfirm] = useState('')

    const [data, setdata] = useState(
    {   user: "",
        password: "" 
    })

    const handleInputChange = (e) =>{
        setdata({
            ...data, 
            [e.target.name] : e.target.value    
        })
    } 

    const validationDataUser = async () => {

        await axios(`http://localhost:3000/users`,{params: {user: data.user, password: md5(data.password)}} )
        .then(res => {
            if (res.data.length > 0) {
                    dispatch({
                        type: types.startSession,
                        enteringTheSession: {
                            user: res.data[0].user,
                            id: res.data[0].id,
                            name: res.data[0].name,
                            last_name: res.data[0].last_name
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
                        name="user"
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
