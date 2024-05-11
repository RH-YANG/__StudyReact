function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',
        { onClick: () => setLiked(!liked) },
        text,
    );
} // 기존 코드와 같음

function Container() {
    const [count, setCount] = React.useState(0);
    return React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement( // 화면에 count 상태값을 보여주고, 증가 감소 버튼을 통해 count 상태값을 변경하는 코드
            'div',
            { style: { marginTop: 20 } },
            React.createElement('span', null, '현재 카운트: '),
            React.createElement('span', null, count),
            React.createElement(
                'button',
                { onClick: () => setCount(count + 1) },
                '증가',
            ),
            React.createElement(
                'button',
                { onClick: () => setCount(count - 1) },
                '감소',
            ),
        ),
    );
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
