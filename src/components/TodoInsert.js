import React,{useState, useCallback} from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert}) { //부모에서 내려줬으니깐 인자값으로 받아줘야한다.
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

	const onSubmit = useCallback(e => {
		onInsert(value); //함수로 감싸서 보낼수 있다. 함수로 감쌌을때 인자값으로만 보낼 수 있다
		setValue('');
		e.preventDefault();
		//submit이벤트는 브라우저에서 새로고침을 발생시킨다 
	},[value]);

	return (
		<form className="TodoInsert" onSubmit={onSubmit}>
			<input
				placeholder="할 일을 입력하세요"
				value={value}
				onChange={onChange}
			/>
			<button type="submit"><MdAdd /></button>
		</form>
	)
}

export default TodoInsert;