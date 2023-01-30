import { fireEvent, render, screen } from '@testing-library/react';
import CountButtons from '../components/CountButtons';

/**
 * describe는 테스트의 그룹이며, 비슷하거나 같은 맥락의 테스트를 그룹핑하는게 좋다.
 */
describe('<CountButtons />', () => {
  /**
   * it은 단위테스트의 시작부이며 각각의 테스트는 
   * 한가지의 기능만을 진행하는게 관례
   */
  it('has an increment button and a decrement button', () => {
    /** 
     * 1. CountButtons 컴포넌트를 화면에 렌더
     */
    render(<CountButtons />);

    /** 
     * 2. 렌더된 컴포넌트를 data-testid를 통해 객체를 가져옴
     */
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    /**
     * 3. 해당 객체가 DOM에 존재하는지 체크
     */
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();

    // expect(screen.getByTestId('incrementBtn')).toBeInTheDocument();
    // expect(screen.getByTestId('decrementBtn')).toBeInTheDocument();
  });

  it('calls incrementFn and decrementFn', () => {
    /**
     * 1. jest.fn()를 통해 Mockup 함수를 생성
     */ 
    const incrementFn = jest.fn();
    const decrementFn = jest.fn();

    /**
     * 2. CountButtons 컴포넌트에 전달된 매개함수 삽입 후 렌더
     */
    render(
      <CountButtons incrementFn={incrementFn} decrementFn={decrementFn} />
    );

    /**
     * 3. data-testid를 통해 객체를 가져옴
     */
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    /**
     * 4. fireEvent를 통해 click 이벤트를 객체에 전달
     */
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);

    /**
     * 5. Mockup 함수가 실행되었는지 확인
     * 단, 숫자의 증감은 확인할 수 없음
     */
    expect(incrementFn).toBeCalled();
    expect(decrementFn).toBeCalled();
  });
});