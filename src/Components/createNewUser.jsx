import React from 'react'
import DynamicForm from './dynamicForm'

const CreateNewUser = () => {
    return (
        <div> 
            <h5 className="mb-3" >Nuevo Periodista</h5> 
            <DynamicForm customForm={[
                {
                    idKey: 1,
                    nameForm:"name",
                    placeholderForm: "Primer Nombre",
                    typeForm: "text",
                    labelForm: "Nombre",
                    isValueRequirement: true,
                    onlyRead: false
                },
                {
                    idKey: 2,
                    nameForm:"last_name",
                    placeholderForm: "Primer Apellido",
                    typeForm: "text",
                    labelForm: "Apellido",
                    isValueRequirement: true,
                    onlyRead: false
                },
                {
                    idKey: 3,
                    nameForm:"user",
                    placeholderForm: "Nombre de Usuario",
                    typeForm: "text",
                    labelForm: "Usuario",
                    isValueRequirement: true,
                    onlyRead: false
                },
                {
                    idKey: 4,
                    nameForm:"password",
                    placeholderForm: "Clave del usuario",
                    typeForm: "password",
                    labelForm: "password",
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
                    url: "http://localhost:3000/users"
                }
            }
            />
        </div>
    );
}
 
export default CreateNewUser;