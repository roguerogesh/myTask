import styled from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;

`
export const CreateTaskContainer = styled.div`
    background-color: #1a171d;
    height: 100vh;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    
`

export const Heading = styled.h1`
    color: #f3aa4e;
    font-family: "Roboto";
    font-size: 30px;
    font-weight: bold;

`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    
`

export const LabelText = styled.label`
    color: #ffffff;
    font-family: "Roboto";
    font-size: 15px;
    font-weight: bold;

`

export const InputElement = styled.input`
    width: 400px;
    border: none;
    border-radius: 5px;
    height: 40px;
    padding: 15px;
    outline: none;
    margin-bottom: 25px;
    

`

export const SelectElement = styled.select`
    width: 400px;
    border: none;
    border-radius: 5px;
    height: 40px;
    padding: 15px;
    outline: none;
    margin-bottom: 25px;
    

`

export const AddButton = styled.button`
    background-color: #f3aa4e;
    color: #ffffff;
    font-family: "Roboto";
    font-size: 15px;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    outline: none;
    align-self: center;
       
`

export const TagsContainer = styled.div`
    background-color: #131213;
    height: 100vh;
    width: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 30px;
    padding-top: 100px;

`
export const Headings = styled.h1`
    color: #ffffff;
    font-family: "Roboto";
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
`
export const ButtonsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    
`
export const TaskListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    
`