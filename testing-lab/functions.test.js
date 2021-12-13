const {add, returnTwo, greeting, multiply, divide, subtract} = require('./functions.js')

test("should equal 2", ()=>{
    expect(returnTwo()).toEqual(2)
})

describe('greeting tests', ()=>{
    test("should return Hello James", ()=>{
        expect(greeting("James")).toBe("Hello, James")
    })

    test("should return Hello, Jill", ()=>{
        expect(greeting("Jill")).toBe("Hello, Jill")
    })
})

describe("add tests", ()=>{
    it("should return 3", ()=>{
        expect(add(1,2)).toEqual(3)
    })

    it("should return 14", ()=>{
        expect(add(5,9)).toEqual(14)
    })
})

describe("math functions", ()=>{
    test('Should return 25', ()=>{
        expect(multiply(5,5)).toBe(25)
    })

    test("should return 10", ()=>{
        expect(divide(100, 10)).toBe(10)
    })

    test("should return 15", ()=>{
        expect(subtract(25,10)).toBe(15)
    })
})