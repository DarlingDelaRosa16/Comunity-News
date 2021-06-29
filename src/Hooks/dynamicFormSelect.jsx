import {React, useState} from 'react'
import {Button} from 'reactstrap'
import { useForm } from "react-hook-form"
import axios from 'axios'

const DynamicForm = (props) => {
    
    console.log(props.optionsFromSelect)

    const infoForm = props.infoFormSelect
    const infoButton = props.customButton
    const infoUrl = props.customUrl
    const selectOptions = props.optionsFromSelect

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
    
        return(

        <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            
                    <div key={infoForm.idKey}>
                        <label htmlFor="comunityName">Nombre de la comunidad</label>
                        <input 
                            type="text" 
                            className="form-group"
                            {...register( "comunityName",{required: {value: infoForm.isValueRequirement}})} 
                        />
                        <br />
                        <label htmlFor={infoForm.nameForm}>{infoForm.labelForm}: </label>
                        <select
                            className="form-group"
                            type={infoForm.typeForm} 
                            {...register( (infoForm.nameForm),{required: {value: infoForm.isValueRequirement}})} 
                        >
                           {
                               selectOptions.map(item =>(
                                   <option value={item.id}>{item.name}</option>
                               ))
                           }
                        </select>
                        
                    </div>
               
            <div hidden={response[2]} className={`alert alert-${response[1]} mt-1`}>{response[0]}</div>
            <br />
            <Button type={infoButton.typeButtonForm}>{infoButton.contentButton}</Button>
        </form>
        );
            
    
    
}

export default DynamicForm;