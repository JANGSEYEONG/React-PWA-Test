import useVoiceMultiText from './hooks/useVoiceMultiText';

const WriteEmotion = () => {
  const [think, changeThink, listenThink, listeningThink, stopThink] =
    useVoiceMultiText('');

  const [result, changeResult, listenResult, listeningResult, stopResult] =
    useVoiceMultiText('');

  return (
    <>
      <div style={{fontSize: '15px', margin: '10px'}}>
        버튼을 클릭하면 인식이 시작됩니다. <br />
        텍스트 영역에 글자가 채워지면 stop 버튼을 눌러 인식을 멈춰주세요. <br />
        모바일에서 하면 좀 느립니다 ㅠ
      </div>
      <div>
        <div>
          <label></label>
          <textarea
            style={{width: '300px'}}
            value={think}
            onChange={e => changeThink(e.target.value)}
          />
          <button
            onClick={() => {
              listenThink({interimResults: false});
            }}>
            Listen
          </button>
          <button
            onClick={() => {
              stopThink();
            }}>
            Stop
          </button>
          <button
            onClick={() => {
              changeThink('');
            }}>
            Reset
          </button>
          {listeningThink && <div>Go ahead I'm listening</div>}
        </div>
      </div>
      <div>
        <div>
          <label></label>
          <textarea
            style={{width: '300px'}}
            value={result}
            onChange={e => changeResult(e.target.value)}
          />
          <button
            onMouseDown={() => {
              listenResult({interimResults: false});
            }}
            onMouseUp={() => {
              stopResult();
            }}>
            Listen
          </button>
          <button
            onClick={() => {
              changeResult('');
            }}>
            Reset
          </button>
          {listeningResult && <div>Go ahead I'm listening</div>}
        </div>
      </div>
    </>
  );
};

export default WriteEmotion;
