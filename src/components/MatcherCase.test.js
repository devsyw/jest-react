/**
 * describe -> it 단계로 그룹핑하지 않고 test로 단위테스트 작성도 가능하다.
 */
test('Sum', () => {
    const n = 1+1;
    expect(n).toBe(2); // toBe: 값 비교
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2}); // toEqual: Object 비교
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);  // a + b는 0이외의 값인가?
        }
    }
});

/**
 * 참 / 거짓
 */
test('null', () => {
    const n = null;
    expect(n).toBeNull();           // toBeNull: n은 null인가?
    expect(n).toBeDefined();        // toBeDefined: n은 undefined가 아닌가?
    expect(n).not.toBeUndefined();  // toBeUndefined: n은 undefined인가? (not 참조)
    expect(n).not.toBeTruthy();     // toBeTruthy: n은 True인가? (not 참조)
    expect(n).toBeFalsy();          // toBeFalsy: n은 False인가?
});
    
test('zero', () => {
    const z = 0; // 위의 경우와 비교해보세요.
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});


/**
 * 숫자 비교
 */
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);           // toBeGreaterThan: value는 3보다 큰 숫자인가?
    expect(value).toBeGreaterThanOrEqual(3.5);  // toBeGreaterThanOrEqual: value는 3.5와 같거나 큰 숫자 인가?
    expect(value).toBeLessThan(5);              // toBeLessThan: value는 5보다 작은가?
    expect(value).toBeLessThanOrEqual(4.5);     // toBeLessThanOrEqual: value는 4.5와 같거나 작은 숫자 인가?
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);                  // 반올림 오류로 에러발생(0.30000000000000004)
    expect(value).toBeCloseTo(0.3);             // toBeCloseTo: 근사치(가까운 값)인지 판별
});

/**
 * 문자열 비교
 */
test('team에 I라는 글자가 있나요? + not', () => {
    expect('team').not.toMatch(/I/);            // toMatch: 문자열이 정규식과 일치하는지 확인 (regexp | string)
});
  
test('Christoph에 stop이라는 글자가 있나요?', () => {
    expect('Christoph').toMatch(/stop/);
});

/**
 * 배열
 */
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];
  
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');             // toContain: 배열에서 특정 item 이 있는지 확인
    expect(new Set(shoppingList)).toContain('milk');
});

/**
 * 예외처리
 */
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}
  
test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // 오류 메시지 또는 정규식에 포함되어야 하는 문자열을 사용할 수도 있습니다
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // 또는 아래와 같은 정규식을 사용하여 정확한 오류 메시지를 일치시킬 수 있습니다
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});



