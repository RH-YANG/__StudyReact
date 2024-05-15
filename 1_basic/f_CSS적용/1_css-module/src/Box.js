// 일반 버전
// import React from 'react';
// import style from './Box.module.css';

// function Box({ size }) {
//     if (size === 'big') {
//         return <div className={`${style.box} ${style.big}`}>큰 박스</div>;
//     } else {
//         return <div className={`${style.box} ${style.small}`}>작은 박스</div>;
//     }
// }
// export default Box;


// classnames 패키지 사용한 버전
import React from 'react';
import style from './Box.module.css';
import cn from 'classnames';

function Box({ size }) {
    const isBig = size === 'big';
    const label = isBig ? '큰 박스' : '작은 박스';
    return (
        <div
            className={cn(style.box, { [style.big]: isBig, [style.small]: !isBig })}
        >
            {label}
        </div>
    );
}
export default Box;