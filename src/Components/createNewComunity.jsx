import React from 'react'
import DynamicForm from './dynamicForm'
import useFetchGet from '../Hooks/useFetchGet'
import "../Styles/createNewComunity.css"

const CreateNewComunity = () => {

    const dataBaseInfo = useFetchGet(`http://localhost:3000/Category`)

    return (
        <div>
            <h5 className="mb-3" >Nueva Comunidad</h5>
            <div id="boxCategories">
            <h6>Categorias existentes</h6>  
                <ul>
                    {dataBaseInfo.map(item => (
                        <li key={item.id}>{item.id}-{item.name}</li>
                    ))}
                </ul>
            </div>
            <DynamicForm customForm={[
                {
                    idKey: 1,
                    nameForm:"name",
                    placeholderForm: "Nombre de la comunidad",
                    typeForm: "text",
                    labelForm: "Comunidad",
                    isValueRequirement: true,
                    onlyRead: false
                },
                {
                    idKey: 2,
                    nameForm:"categoryId",
                    placeholderForm: "Categoria Perteneciente",
                    typeForm: "text",
                    labelForm: "Categoria",
                    isValueRequirement: true,
                    onlyRead: false
                }
                
            ]} 
            customButton={
                {
                    typeButtonForm: "submit",
                    contentButton: "Confirmar"
                }
            }
            customUrl={
                {
                    url: "http://localhost:3000/comunities"
                }
            }
            />
        </div>
    );
}
 
export default CreateNewComunity;