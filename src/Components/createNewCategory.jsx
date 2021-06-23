import React from 'react'
import DynamicForm from './dynamicForm'

const CreateNewCategory = () => {

    return (
        <div>
            <h5 className="mb-3" >Nueva categoria</h5>
            <DynamicForm customForm={[
                {
                    idKey: 1,
                    nameForm:"categoryName",
                    placeholderForm: "Nombre de nueva categoria",
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
                    url: "http://localhost:3001/category"
                }
            }
            />
        </div>
    );
}
 
export default CreateNewCategory;