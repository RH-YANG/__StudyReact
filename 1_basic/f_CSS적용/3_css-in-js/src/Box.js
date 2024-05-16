import React from 'react';
import styled from 'styled-components';


// 일반 버전
// const BoxCommon = styled.div`
//   height: 50px;
//   background-color: #aaaaaa;
// `;
// // 공통 css 코드를 담고있는 컴포넌트

// const BoxBig = styled(BoxCommon)`
//   width: 200px;
// `;
// // 상속개념으로 BoxCommon을 확장해서 스타일을 작성

// const BoxSmall = styled(BoxCommon)`
//   width: 100px;
// `;

// function Box({ size }) {
//     if (size === 'big') {
//         return <BoxBig>큰 박스</BoxBig>; // styled-components는 일반 컴포넌트처럼 사용
//     } else {
//         return <BoxSmall>작은 박스</BoxSmall>;
//     }
// }



// 동적 스타일링 적용
const BoxCommon = styled.div`
  width: ${props => (props.isBig ? 200 : 100)}px;
  height: 50px;
  background-color: #aaaaaa;
`;
// 동적으로 적용하기 때문에 BoxBig과 BoxSmall을 하나로 합칠 수 있다

function Box({ size }) {
  const isBig = size === 'big';
  const label = isBig ? '큰 박스' : '작은 박스';
  return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
}


export default Box;