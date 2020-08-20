import React, { Component } from 'react';
import { useSample } from '../contexts/sample';
// 값을 설정시킬 form을 만들 컴포넌트
class Sends extends Component {
  
  state = {
    input: ''
  }

  componentDidMount() {
    // :: 초기 값 설정
    this.setState({
      input: this.props.value
    })
  }

  // change action 함수
  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // 버튼 클릭 시, 새로고침 방지
    // :: props로 받은 setValue 호출
    this.props.setValue(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    );
  }
}

// :: Consumer 를 사용하여 context 값을 전달해준 컨테이너 컴포넌트
// const SendsContainer = () => (
//   <SampleConsumer>
//     {
//       ({ state, actions }) => (
//         <Sends
//           value={state.value}
//           setValue={actions.setValue}
//         />
//       )
//     }
//   </SampleConsumer>
// )
// 상기 코드 대신, useSample을 사용한다.


// :: Sends 대신에 SendsContainer 를 내보내준다.
// export default SendsContainer;
// useSample 사용
export default useSample(Sends);