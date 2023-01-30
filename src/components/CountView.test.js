import { render, screen } from '@testing-library/react';
import CountView from '../components/CountView';

afterEach(() => {
  
})

describe('<CountView />', () => {
  it('shows the current count state.', () => {

    /**
     * 1. CountView 컴포넌트에 렌더될 값 지정
     */
    let sampleCount = 0;

    /**
     * 2. CountView 컴포넌트에 값 입력 후 렌더
     */
    render(<CountView count={sampleCount} />);

    /**
     * 3. '현재 숫자: 0' Text를 가진 객체를 가져옴, CountView 컴포넌트가 입력됨
     */
    const initialState = screen.getByText('현재 숫자: 0');

    /**
     * 4. 해당 객체가 DOM에 존재하는지 확인
     */
    expect(initialState).toBeInTheDocument();

    /**
     * 위와 동일, 상태를 확인하는 Test Code의 경우 여러 Test case를 작성해보는것이 좋다.
     */
    sampleCount = 13;
    render(<CountView count={sampleCount} />);
    const countState = screen.getByText('현재 숫자: 13');

    expect(countState).toBeInTheDocument();
  });
});