import React from 'react';
import { Route, Link, Routes, useParams, useMatch } from 'react-router-dom';

function Rooms() {
    const match = useMatch('/rooms/*');
    const baseUrl = match ? match.pathnameBase : '/rooms';

    return (
        <div>
            <h2>여기는 방을 소개하는 페이지입니다.</h2>
            <Link to={`${baseUrl}/blueRoom`}>파란 방입니다</Link>
            <br />
            <Link to={`${baseUrl}/greenRoom`}>초록 방입니다</Link>
            <br />
            <Routes>
                <Route path=":roomId" element={<Room />} />
                <Route path="/" element={<h3>방을 선택해 주세요.</h3>} />
            </Routes>
        </div>
    );
}
export default Rooms;

function Room() {
    const { roomId } = useParams();
    return <h2>{`${roomId} 방을 선택하셨습니다.`}</h2>;
}