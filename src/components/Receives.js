import React from 'react';
// import { SampleConsumer } from '../contexts/sample';
import { useSample } from '../contexts/sample';
// 나중에 값을 받아와서 보여줄 컴포넌트
const Receives = ({ value }) => {
  return (
    // <SampleConsumer>
    //   {
    //     (sample) => ( // 작성한 방식은 'Render Props' 라는 패턴이다.
    //       <div>
    //         현재 설정된 값 : { sample.state.value }
    //       </div>
    //     )
    //   }
    // </SampleConsumer>
    // 상기 코드 대신에 하기 코드를 사용
    <div>
      현재 설정된 값 : { value }
    </div>
  );
};

// export default Receives;
export default useSample(Receives);