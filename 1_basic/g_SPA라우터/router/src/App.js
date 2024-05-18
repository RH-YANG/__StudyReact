/**
 *  create-react-dom 라이브러리를 사용하여 SPA를 구현한다
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// BrowserRouter : create-react-dom을 사용할 때는 전체를 해당 컴포넌트로 감싸야한다
// Link : 페이지를 전환할 때 사용한다. to 속성값으로 이동할 주소를 나타낸다
// Routes : Route 컴포넌트를 감싼다
// Route : 각 페이지를 정의한다. 현재 주소가 path 속성값으로 시작하면 element 속성값을 렌더링한다
//         같은 path값을 가지는 Route 컴포넌트를 여러개 작성 할 수 있다(여러개 모두 렌더링)
//         컴포넌트 내부에 다시 라우팅 하는 코드를 넣을 수 있다(Rooms 컴포넌트 참고)
import Rooms from './Rooms';

export default function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: 20, border: '5px solid gray' }}>
                <Link to="/">홈</Link>
                <br />
                <Link to="/photo">사진</Link>
                <br />
                <Link to="/rooms">방 소개</Link>
                <br />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/photo" element={<Photo />} />
                    <Route path="/rooms" element={<Rooms />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

function Home({ match }) {
    return <h2>이 곳은 홈페이지입니다.</h2>;
}
function Photo({ match }) {
    return <h2>여기서 사진을 감상하세요.</h2>;
}