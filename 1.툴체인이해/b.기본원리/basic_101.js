function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  // 초깃값과 함께 컴포넌트의 상태값 정의
  // React는 react.development.js 파일에서 전역변수로 생성됨
  const text = liked ? '좋아요 취소' : '좋아요';
  // 컴포넌트의 상태값에 따라 동적으로 버튼의 문구를 결정

  return React.createElement(
    'button', // 요소 타입. <button>태그로 지정
    { onClick: () => setLiked(!liked) }, // 속성. 클릭이벤트가 추가되었다
    text, // 태그의 내부문자
  );
  // 해당 <button> 돔 리액트 요소 반환한다.
}

const domContainer = document.querySelector('#react-root');
// basic_101.html 파일에 미리 만들어 뒀던 돔 요소를 가져온다
ReactDOM.render(React.createElement(LikeButton), domContainer);
// react-dom.development.js에서 전역변수로 생성된 ReactDOM 을 사용하여 만든 함수를 돔 요소에 붙인다