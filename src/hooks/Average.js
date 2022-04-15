import React,{useState, useRef, useCallback, useMemo} from 'react';

const getAverage = lists => { //getAverage = lists =>는 파라미터 매개변수 lists의 값이 들어오는 거고
	console.log('평균값 계산중..');
	if(lists.length === 0) return 0; //lists의 길이가 0이면 값을 0으로 반환해주고
	const sum = lists.reduce((a, b) => a + b); //reduce()는 배열안의 값을 가져와서 다 더해주는 역할을 한다. sum에 해당하는 메소드 함수라고 생각하면 된다.
	return sum / lists.length; //getAverage()함수를 호출한 곳에 return을 하게된다.
}

function Average() {
	const [lists, setLists] = useState([]); //lists도 초기에는 비어있는 배열
	const [number, setNumber] = useState(''); //number는 초기에는 비어있는값
	
	const inputEl = useRef(null); //초기값은  null이다

	const onchange = useCallback(e => { //useCallback 랜더링 최적화 //이벤트 핸들러 발생했을때만 
		console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성..');
		setNumber(e.target.value); //target이 되는 이벤트 객체가 들어오고, 타겟이 되는 input의 value값을 바뀌줬다.
	},[]); //[]배열이 비어있으면 컴포넌트가 처음 렌더링 될 때만 함수 생성

	const onInsert = useCallback(e => { //이 함수도 이벤트가 발생했을때 발생해라 //useCallback으로 한번 감싸준것
		console.log('number혹은 list가 바뀌었을 때만 함수 호출');
		const nextLists = lists.concat(parseInt(number)); //list맨 마지막에 number를 붙여가지고 //parseInt(number)입력한 값중에 정수값만 추출
		setLists(nextLists); //새로운 리스트값으로 변경을 해줘라
		setNumber(''); //넘버는 다시 초기화
		inputEl.current.focus(); //id에 해당하는 곳에 input에 포커스를 다시 줘라
	},[number,lists]); //number혹은 list가 바뀌었을 때만 함수 호출
		

	const avg = useMemo(() => getAverage(lists) //함수가 아닌 일반 값(숫자,문자열,객체)을 재사용할 때는 useMemo() 훅함수 시용 //연산을 실행
	,[lists]); //lists배열의 값을 넣어서 실행해주고,

	//useCallback()과 useMemo()를 사용하지 않으면, 화면이 랜더링 될 때마다 함수를 계속 생성을 한다.
	//하지만 useCallback()를 사용하면, 이벤트가 발생됐을 때, 즉 이벤트 핸들러의 함수가 필요할 때만 생성하게 되서 랜더링을 최적하게 된다.ㄴ
	
	return (
		<div>
			<div>Average</div>
			<input value={number} onChange={onchange} ref={inputEl} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{lists.map((list,index) => (
					<li key={index}>{list}</li>
				))}
			</ul>
			<div> <b>평균값 :</b> {avg} </div>
		</div>
	)
	//ref={inputEl} input의 id처럼 사용
	//onChange={onchange}
	//{avg} 일반객체
}

export default Average;