import React from 'react';
import Sends from './Sends';
// 화면 왼쪽에 보여줄 컴포넌트
// Sends를 보여준다.
const LeftPane = () => {
  return (
    <div className="pane">
      <Sends />
    </div>
  );
};

export default LeftPane;