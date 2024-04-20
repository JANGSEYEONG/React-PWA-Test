// import {useState} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// import {useSpeechRecognition} from 'react-speech-kit';

//
import {useState} from 'react';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import WritePage from './pages/Write/WritePage';

const App = () => {
  const [isLogin] = useState<boolean>(true);

  return <Layout>{isLogin ? <WritePage /> : <Login />}</Layout>;

  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState('');

  // const {listen, listening, stop} = useSpeechRecognition({
  //   onResult: result => {
  //     setValue(prev => {
  //       return prev + ' ' + result;
  //     });
  //   }
  // });

  // return (
  //   <>
  //     <div>
  //       <a href='https://vitejs.dev' target='_blank'>
  //         <img src={viteLogo} className='logo' alt='Vite logo' />
  //       </a>
  //       <a href='https://react.dev' target='_blank'>
  //         <img src={reactLogo} className='logo react' alt='React logo' />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className='card'>
  //       <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>

  //     <div>
  //       <textarea value={value} onChange={e => setValue(e.target.value)} />
  //       <button
  //         onMouseDown={() => {
  //           listen({interimResults: false});
  //         }}
  //         onMouseUp={() => {
  //           stop();
  //         }}>
  //         Listen
  //       </button>
  //       {listening && <div>Go ahead I'm listening</div>}
  //     </div>
  //   </>
  // );
};

export default App;
