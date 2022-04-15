
import React,{useState, useEffect} from 'react'; //useEffect는 컴포넌트가 렌더링 될때마다 특정 작업을 수행  //훅함수

function Info() {
	const [name, setName] = useState(''); //초기값은 빈 string객체
	const [nickname, setNickname] = useState('');

	useEffect(()=>{
		console.log("랜더링이 완료되었습니다.");
		console.log({name,nickname});
	},[name,nickname]); //[name,nickname]여기가 []되어있으면, componentDidMount()일떄 실행

	const onChangeName = (e) => {
		setName(e.target.value); //input의 value값을 setName으로 바꿔줘라
	}
	//name의 값이 바뀌면 useEffect가 다시 실행이 된다.

	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	}

	return (
		<div>
			<div>Info</div>
			<div>
				<input value={name} onChange={onChangeName} />
				<input value={nickname} onChange={onChangeNickname} />
			</div>
			<div>
				<div> <b>이름 :</b> {name} </div>
				<div> <b>닉네임 :</b> {nickname} </div>
			</div>
		</div>
	)
}

export default Info