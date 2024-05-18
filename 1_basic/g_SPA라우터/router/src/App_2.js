/**
 *  히스토리 API를 사용하여 직접 페이지 라우팅 처리를 구현해본다
 */

import React, { useEffect, useState } from 'react';

export default function App() {
    // 현재 페이지 정보를 pageName 상탯값으로 관리한다
    const [pageName, setPageName] = useState('');

    //popstate 이벤트가 발생하면 페이지를 전환한다는 의미로 pageName 상탯값을 수정한다.
    useEffect(() => {
        window.onpopstate = event => {
            setPageName(event.state); // 브라우저 히스토리 state를 페이지 이름으로 사용하고 있다.
        };
    }, []);

    // 버튼을 클릭했을 때 호출되는 이벤트 처리 함수
    function onClick1() {
        const pageName = 'page1';
        window.history.pushState(pageName, '', '/page1');
        setPageName(pageName);
    }
    function onClick2() {
        const pageName = 'page2';
        window.history.pushState(pageName, '', '/page2');
        setPageName(pageName);
    }

    return (
        <div>
            <button onClick={onClick1}>page1</button>
            <button onClick={onClick2}>page2</button>
            {!pageName && <Home />} {/*버튼을 누르기 전에는 Home 컴포넌트가 랜더링 됨*/}
            {pageName === 'page1' && <Page1 />} {/*누르는 버튼에 따라 PageN컴포넌트가 렌더링됨*/}
            {pageName === 'page2' && <Page2 />}
        </div>
    );
}

function Home() {
    return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}
function Page1() {
    return <h2>여기는 Page1입니다.</h2>;
}
function Page2() {
    return <h2>여기는 Page2입니다.</h2>;
}