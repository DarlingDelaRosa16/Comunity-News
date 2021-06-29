import React from 'react'
import DynamicFormSelect from '../Hooks/dynamicFormSelect'
import useFetchGet from '../Hooks/useFetchGet'
import "../Styles/createNewComunity.css"

const CreateNewComunity = () => {

    const dataBaseInfo = useFetchGet(`http://localhost:3001/category`)
  
    var dataFromDB = []
    if (dataBaseInfo.items !== undefined){
        const queso = ()=>{
        for( let items of dataBaseInfo.items ){
            dataFromDB.push({id: items._id, name: items.categoryName})
        }}
        queso()
    }

    return (
        <div>
            { 
                <DynamicFormSelect
                    customUrl={
                        {
                            url: "http://localhost:3001/comunity"
                        }
                    }
                    customButton={
                        {
                            typeButtonForm: "submit",
                            contentButton: "Confirmar"
                        }
                    }                                    
                    infoFormSelect={{
                        idKey: 1,
                        nameForm:"categoryId",
                        typeForm: "select",
                        labelForm: "Categoria",
                        isValueRequirement: true
                    }}
                    optionsFromSelect={dataFromDB}
            
                /> 
            }
        </div>
    );
}
 
export default CreateNewComunity;