
import React, { useEffect } from 'react';


/**
 * page1, page2 버튼을 누를때마다 url이 /page1, /page2로 변경되는것을 확인할 수 있음
 * 뒤로가기를 계속 누르면 이전의 url로 가다가 최초의 url까지 도착함을 확인할 수 있음
 */

export default function App() {
  useEffect(() => {
    window.onpopstate = function (event) { // 뒤로가기를 누르면 onpopstate 이벤트 핸들러가 작동된다
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);
  return (
    <div>
      <button onClick={() => window.history.pushState('v1', '', '/page1')}> // 버튼을 누르면 pushState로 스택이 쌓인다
        page1
      </button>
      <button onClick={() => window.history.pushState('v2', '', '/page2')}>
        page2
      </button>
    </div>
  );
}
