import {useCallback, useState} from 'react';
import {useSpeechRecognition} from 'react-speech-kit';

type UseVoiceMultiTextReturn = [
  string, // 텍스트 값
  (newValue: string) => void, // 텍스트 변경 핸들러
  (options?: {lang?: string; interimResults?: boolean}) => void, // 음성 인식 시작 함수
  boolean, // 음성 인식 중인지 상태
  () => void // 음성 인식 중지 함수
];

const useVoiceMultiText = (initialValue: string): UseVoiceMultiTextReturn => {
  const [value, setValue] = useState<string>(initialValue);

  // 음성 인식 관련
  const {listen, listening, stop} = useSpeechRecognition({
    onResult: result => {
      // 결과를 받아 현재 텍스트에 추가
      setValue(prev => {
        return prev ? `${prev} ${result}` : result;
      });
    }
  });

  // 입력 필드 변경 핸들러
  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return [value, handleChange, listen, listening, stop];
};

export default useVoiceMultiText;
