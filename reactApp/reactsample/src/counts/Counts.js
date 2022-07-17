import {useState} from 'react';
import './Counts.css';

function Counts() {
	const [count, setCount] = useState(0);

	function handleSubmit(e) {
		e.preventDefault();
		const inputBox = document.getElementById('inputCount');
		const inputValueString = e.target[0].value;
		const inputValueInt = parseInt(inputValueString);
		inputBox.value = "";
		if (!isNaN(inputValueInt)){
			setCount(inputValueInt);
		} else {
			const para = document.createElement('p');
			const text = document.createTextNode('無効な値です');
			para.appendChild(text);
			const elem = document.getElementsByClassName('inputCountDiv');
			elem[0].appendChild(para);
			setTimeout(()=>{elem[0].removeChild(para)},5000);
		}	
	}


	return (
		<div className='Counts'>
			<p>現在のカウント：{count}</p>
			<button onClick={()=>{setCount(prevCount=>prevCount+1)}}>＋</button>
			<button onClick={()=>{setCount(prevCount=>prevCount-1)}}>ー</button>
			<br></br>
			<div className='inputCountDiv'>
				<form onSubmit={handleSubmit}>
					<label>
						任意のカウントに変更：
						<input id='inputCount' name='inputCount'></input>
					</label>
					<input type='submit' value='変更'></input>
				</form>
			</div>
			
			<br></br>
			<button onClick={()=>{setCount(0)}}>リセット</button>
		</div>
	);

}

export default Counts;