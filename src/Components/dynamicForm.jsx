import {React, useState} from 'react'
import {Button, FormGroup, Form} from 'reactstrap'
import { useForm } from "react-hook-form"
import axios from 'axios'

const DynamicForm = (props) => {

    const infoForm = props.customForm
    const infoButton = props.customButton
    const infoUrl = props.customUrl

    const [response, setResponse] = useState(["", "", true])
    const { register, handleSubmit} = useForm();
    
    const onSubmit = async (data, e)=>{

        await axios.post(infoUrl.url, data)
        .then(res => {
            if(res.status === 200 || res.status === 201 ){
                setResponse(["Datos guardados Correctamente", "success", false])
            }else{
                setResponse(["Error al guardar datos", "danger", false])
            }
        })
        e.target.reset()
    }

    return (
       <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
           {
               infoForm.map(item => (
                <div key={item.idKey}>
                    <label htmlFor={item.nameForm}>{item.labelForm}: </label>

                    <input 
                        readOnly={item.onlyRead}
                        className="form-group"
                        type={item.typeForm}  
                        placeholder={item.placeholderForm}
                        {...register( (item.nameForm),{required: {value: item.isValueRequirement}})} 
                    />                   
                </div>
               ))
           }
           <div hidden={response[2]} className={`alert alert-${response[1]} mt-1`}>{response[0]}</div>
           <br />
           <Button type={infoButton.typeButtonForm}>{infoButton.contentButton}</Button>
       </form>
    );
}
 
export default DynamicForm;