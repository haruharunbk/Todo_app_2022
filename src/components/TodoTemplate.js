import React from 'react';
import '../styles/TodoTemplate.scss';

function TodoTemplate({children}) { //구조분해할당으로 프로퍼티 값을 전달하기
	return (
		<div className='TodoTemplate'>
			<div className='app-title'>일정관리</div>
			<div className='content'>{children}</div>
		</div>
	)
}

export default TodoTemplate;