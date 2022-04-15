import React,{useState} from 'react'; //훅함수를 하용하려면 구조분해할당으로 useState를 불러와야 한다.

function Counter() {
	const [value, setValue] = useState(0); //value의 초기값은 0
	
	return (
		<div>
			<h1>useState Hook 사용하기</h1>
			<p>현재 카운터 값은 : <b>{value}</b> 입니다.</p>
			<button onClick={()=>setValue(value + 1)}>더하기</button>
			<button onClick={()=>setValue(value - 1)}>빼기</button>
		</div>
	)
	//<button onClick={()=>setValue(value +1)}>더하기</button>
	//()=> 매개변수 값은 없고 함수를 하나 더 만들어서 그안에서 setState함수를 실행시킴
	//useState가 여러개일때는 각각만들어서 사용해줘야한다.
}

export default Counter;