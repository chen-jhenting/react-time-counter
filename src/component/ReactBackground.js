import logo from '../logo.svg';

export default function Background(){
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}
// 只能 return 一個 element
// 這邊已經 return header 不能再多塞一個 element
// 巢狀包裹可以
