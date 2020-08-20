import React from 'react';
import Receives from './Receives';
// 화면 오른쪽에 보여질 컴포넌트
// Receives를 보여준다.
const RightPane = () => {
  return (
    <div className="pane">
      <Receives />
    </div>
  );
};

export default RightPane;