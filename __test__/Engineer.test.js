// if using engineer we need ot get the role of engineer
// if we are prompting the use for their github username we need to return that github username
// can the username be even taken in using the constructor 
const Engineer = require('../lib/Engineer');
const engineer = new Engineer({
    name: 'John', 
    id: 1,
    email: 'john@example.com',
    github: 'john289'
});

describe("Engineer", () => {

    it('should set the github username', () => {
        engineer.github = 'abby610'
        expect(engineer.github).toEqual('abby610');
    })

    it('should get the github username', () => {
        
        expect(engineer.getGithub()).toEqual('abby610');
    })

    it('should get the role', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    })

    
})