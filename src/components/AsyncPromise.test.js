/**
 * ================================== 중요 ==================================
 * 아래의 Test Code들은 fetchData()라는 가상의 promise 객체가 존재한다는 가정하에 진행
 * ==========================================================================
 */

// 테스트용 promise 객체
function fetchData () {
    return new Promise((resolve, reject) => {
        resolve('성공');
        reject('실패');
    })
} 


/**
 * Promises
 * 테스트에서 Promises를 return하면 Jest는 해당 Promises가 해결될 때까지 기다림
 * Promises rejected시, 테스트 실패
 */
test('Promises test', () => {
    return fetchData().then(data => {
        expect(data).toBe('성공');
    });
});


/**
 * Async/Await
 */
test('Async/Await test 1', async () => {
    const data = await fetchData();
    expect(data).toBe('성공');
});

test('Async/Await test 2', async () => {
    // expect.assertions(1); // 테스트 중 한번의 Promise가 실행되었는가?
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('실패');
    }
});


/**
 * Callbacks
 * 아래 코드에서 jest 'done'이라는 콜백 함수가 실핼될때까지 기다린다
 * done, callback 함수 추가 후 테스트 가능
 */
// test('Callbacks test', done => {
//     function callback(error, data) {
//         if (error) {
//             done(error);
//             return;
//         }
//         try {
//             expect(data).toBe('성공');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }
//     fetchData(callback);
// });


/**
 * .resolves/.rejects
 * expect 문에서 .resolves Matcher를 사용할 수 있으며 
 * Jest는 해당 Promise가 해결될 때까지 기다림
 * Promise가 거부되면 테스트는 자동으로 실패,
 * 실패할것으로 예상되는 코드에는 .rejects Matcher를 사용하면 예외처리 가능
 */
test('resolves test', () => {
    return expect(fetchData()).resolves.toBe('성공');
});

// test('the fetch fails with an error', () => {
//     return expect(fetchData()).rejects.toMatch('실패');
// });