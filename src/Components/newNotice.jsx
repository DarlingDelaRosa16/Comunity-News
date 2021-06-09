import {React, useState, useContext} from 'react'
import axios from 'axios'
import {Button, FormGroup, Form, Label} from 'reactstrap'
import { useForm } from "react-hook-form"
import CategoryContext from '../Contexs/categoryContext'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const NewNotice = () => {

    const [state, /*dispatch*/] = useContext(CategoryContext)
    const [response, setResponse] = useState(['',''])
    const [textData, settextData] = useState('')
    const { register, handleSubmit, formState: { errors }} = useForm();
    

    const onSubmit = async (data, e)=>{
        let des = {description : textData}
        let newsData = {...des, ...data}

        await axios.post('http://localhost:3000/notices', newsData )
        .then(res =>{
            if(res.status === 200 || res.status === 201){
                let asnwer = ["La nueva noticia fue guardada correctamente", "success"]
                setResponse(asnwer)
                setInterval(()=>{window.location.href='/'}, 2500)
            }else{
                let asnwer = ["La nueva noticia fue guardada correctamente", "danger"]
                setResponse(asnwer)
            }
        }).catch(error => {
            console.log(error)
        })
        
    }


return (

    <div >

        <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

            <FormGroup>
                <Label htmlFor="title"><b>Titulo: </b></Label>
                <input type="text" name="title" 
                    {...register( 'title' ,{required: {value: true, message: "Este campo en Necesario"}})} 
                />
                <br/>
                <span className="text-danger">
                    {errors.title && errors.title.message}
                </span>
                
            </FormGroup>

            <FormGroup>
                <Label htmlFor="caption"><b>Subtitulo: </b></Label>
                <input type="text" name="caption" 
                    {...register( 'caption' ,{required: {value: true, message: "Este campo en Necesario"}})} 
                />
                <br/>
                <span className="text-danger">
                    {errors.caption && errors.caption.message}
                </span>
                
            </FormGroup>
    
            <FormGroup>

                <Label htmlFor="img"> <b>Imagen: </b> </Label>
                <input type="text" name="img"  
                    {...register( 'img' ,{required: {value: true, message: "Este campo en Necesario"}})} 
                />
                <br/>
                <span className="text-danger">
                    {errors.img && errors.img.message}
                </span>

            </FormGroup>

            <FormGroup>
                <Label htmlFor="date"><b>Fecha: </b></Label>
                <input 
                    name="date"
                    type="text"
                    defaultValue={new Date()} 
                    readOnly 
                    {...register('date')} 
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="categoryId"><b>Categoria: </b></Label>
                <input 
                    hidden
                    defaultValue={state.categoryCustomButton.categoryId}
                    {...register('categoryId')} 
                />  
                <input name="categoryId" readOnly defaultValue={state.categoryCustomButton.categoryName}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="comunityId"><b>Comunidad: </b></Label>
                <input 
                    hidden
                    defaultValue={state.comunityCustomButton.comunityId} 
                    {...register('comunityId',{required: {value: true}}) } 
                />
                <input name="comunityId" readOnly  defaultValue={state.comunityCustomButton.comunityName}/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="journalistName"><b>Autor: </b></Label>
                <input 
                    name="journalistName"
                    type="text" 
                    defaultValue={`${state.logInUser.name} ${state.logInUser.last_name}`}
                    readOnly
                    {...register('journalistName')} 
                />
            </FormGroup>
            
            <FormGroup>
                <label htmlFor="description"><b>Descripcion: </b></label>
                <CKEditor
                    rows="10"
                    editor={ClassicEditor}
                    data={textData}
                    onChange={(evt, editor)=>{
                        const data = editor.getData()
                        settextData(data)
                    }}
                />
            </FormGroup>

            <Button type="submit" > Confirmar </Button>
            
        </Form>
        <div className={`alert alert-${response[1]} mt-1`}>{response[0]}</div>
    </div>
);
}
 
export default NewNotice;