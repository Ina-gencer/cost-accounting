import './CostForm.css';
import { useState } from 'react';

const CostForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate ] = useState('');

    const nameChangeHandler = (event)=> {
        setInputName(event.target.value)
    }
     const amountChangeHandler = (event) => {
         setInputAmount(event.target.value)
     }
    const dateChangeHandler = (event) => {
         setInputDate(event.target.value)
    }
    const submitHandler = (event)=> {
        event.preventDefault();
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-cost__controls">
                    <div className="new-cost__controls">
                        <label className="new-cost__control label">Name of expenses</label>
                        <input type="text" className="new-cost__control input" 
                        onChange={nameChangeHandler}
                        value={inputName} />
                    </div>

                    <div className="new-cost__controls">
                        <label className="new-cost__control label">Amount</label>
                        <input type="number" className="new-cost__control input"
                        min='0.01' step='0.01' 
                         onChange={amountChangeHandler}
                         value={inputAmount}
                         />
                    </div>

                    <div className="new-cost__controls">
                        <label className="new-cost__control label">Date</label>
                        <input type="date" className="new-cost__control input"
                               min='2018-01-01' step='2022-12-31'
                                onChange={dateChangeHandler}
                                value={inputDate}
                            />
                    </div>

                    <div className="new-cost__actions">
                        <button type='submit'>Add costs</button>
                    </div>
                     <div>
                        <button type='button' onClick={props.onCancel}>Cancel</button>
                    </div> 
                </div>
  
  


            </form>
        </div>
    );
}

export default CostForm;
