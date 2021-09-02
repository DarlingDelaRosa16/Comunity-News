import React from 'react'
import DynamicFormText from '../Hooks/dynamicFormText'

const CreateNewCategory = () => {

    return (
        <div>
            <h5 className="mb-3" >Nueva categoria</h5>
            <DynamicFormText customForm={[
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
                    url: "https://comunity-news.herokuapp.com/category"
                }
            }
            />
        </div>
    );
}
 
export default CreateNewCategory;