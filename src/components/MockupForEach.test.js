import { forEachFn } from "./MockupForEach";

/**
 * Mock 사용 방법
 */
const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEachFn([0, 1], mockCallback);

  /**
   * 함수가 두 번 호출되었는가?
   */ 
  expect(mockCallback.mock.calls).toHaveLength(2);

  /**
   * 함수에 대한 첫 번째 호출의 첫 번째 인수는 0 인가?
   */
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  /**
   * 함수에 대한 두 번째 호출의 첫 번째 인수는 1 인가?
   */
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  /**
   * 함수에 대한 첫 번째 호출의 반환 값은 42 인가?
   */
  expect(mockCallback.mock.results[0].value).not.toBe(42);
});


/**
 * .mock property
 */
const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]


/**
 * Mock Return Values
 */
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true


/**
 * Mocking 모듈, 파티클, 상속, 네이밍 등등.. 엄청많으니 문서 참조
 * https://jestjs.io/docs/mock-functions
 */
