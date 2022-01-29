'use strict';

beforeAll(()=>{
    console.log('beforeAll','init before all tests'.toUpperCase());
});

afterAll(()=>{
    console.log('afterAll','cleaning after all tests'.toUpperCase());
});

test('this is the first test',()=>{
    console.log('first test')
});

it('This is the second test', ()=>{
    console.log('second test');
});

describe('This is a test suite A', ()=>{
    beforeEach(()=>{
        console.log('beforeEach','before each test');
    });

afterEach(()=>{
    console.log('afterEach: after each test');
});

test('first test in suiteA', ()=>{
    console.log('first test of suiteA');
});

test('second test in suiteA', ()=>{
    console.log('second test of suiteA');
});
});

describe('This is suiteB', ()=>{
    beforeAll(()=>{
        console.log('beforeAllSuiteB')
    });
    describe('This is a subSuiteA of suiteB', ()=>{
        test('first test of subSuiteA', ()=>{
            console.log('first of subSuiteA of B');
        });
        test('second test of subSuiteA', ()=>{
            console.log('second of subSuiteA of B');
        });
    });
    describe('this is a subSuiteB of suiteB', ()=>{
        test('test one of subSuiteB of B',()=>{
            console.log('first test of subSuiteB of B');
        });
    });
});

describe('test concatenating strings',()=>{
    const concat=(partA,partB)=>partA+partB;

    test('first and second results firstsecond',()=>{
        expect(concat('first','second')).toBe('firstsecond');
    });
});

describe('this tests for an exception',()=>{
    function testFunction() {
        throw Error('This is an exception');
    }

        test('test if a function throws an exception',()=>{
            expect(()=>testFunction()).toThrow('This is an exception')
        });
    });