import React, { useContext } from 'react'
import ExpenseItem from './Expenseitem';
import { AppContext } from '../context/AppContext';

const  ExpenseList=()=> {
    const {expenses} = useContext(AppContext);
    
  return (
    <ul className='list-group'>
        {expenses.map((expense)=>(
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
        ))}
    </ul>
  )
}

export default ExpenseList