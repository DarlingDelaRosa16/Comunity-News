import React from 'react'
import DynamicFormText from '../Hooks/dynamicFormText'

const CreateNewUser = () => {
    return (
        <div> 
            <h5 className="mb-3" >Nuevo Periodista</h5> 
            <DynamicFormText customForm={[
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
                    nameForm:"lastName",
                    placeholderForm: "Primer Apellido",
                    typeForm: "text",
                    labelForm: "Apellido",
                    isValueRequirement: true,
                    onlyRead: false
                },
                {
                    idKey: 3,
                    nameForm:"userName",
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
                    url: "https://comunity-news.herokuapp.com/user"
                }
            }
            />
        </div>
    );
}
 
export default CreateNewUser;