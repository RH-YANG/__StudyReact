import React from 'react';

function Button(props) {
    return React.createElement('button', null, props.label);
}
export default Button;
// ESM 문법을 사용하여 모듈들을 가져오고 내보냄
