// 일반 버전
// import React from 'react';
// import style from './Button.module.css';

// function Button({ size }) {
//     if (size === 'big') {
//         return <button className={`${style.button} ${style.big}`}>큰 버튼</button>;
//     } else {
//         return <button className={`${style.button} ${style.small}`}>작은 버튼</button>;
//     }
// }
// export default Button;



// classnames 패키지 사용한 버전
import React from 'react';
import style from './Button.module.css';
import cn from 'classnames';

function Button({ size }) {
    if (size === 'big') {
        return <button className={cn(style.button, style.big)}>큰 버튼</button>;
    } else {
        return <button className={cn(style.button, style.small)}>작은 버튼</button>;
    }
}
console.log(style);
export default Button;