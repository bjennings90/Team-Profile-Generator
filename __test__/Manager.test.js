// when you write a test case you want to think about the errors that could occur 
// we need to think 3 steps ahead every time 
// for example: 
// we need to test if we can set the office number in the prompt through constructor 
// set value of that office number to test 
// can we generate this office number with this prompt 

// in order to ge the role we need it toonly return manager 
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('initualization', () => {
        it('should create an object with name, id, email, officeNumber', () => {
            const manager = new Manager ('John', 1, 'john@example.com', 345);
            expect(manager.name).toEqual('John');
            expect(manager.id).toEqual(1);

    })
})
describe('getRole', () => {

    it('method getRole() should return the role', () => {
        const manager = new Manager ('John', 1, 'john@example.com', 345);
        expect(manager.getRole()).toEqual('Manager');
    })
})

})