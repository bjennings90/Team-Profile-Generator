const Intern = require('../lib/Intern');
const intern = new Intern({
    name: 'John', 
    id: 1,
    email: 'john@example.com',
    school: 'St. School'
});

describe('Intern', () => {

    it('should set the school', () => {
        intern.school = 'Middlebarry'
        expect(intern.school).toEqual('Middlebarry');
    })

    it('should get the school', () => {
        expect(intern.getSchool()).toEqual('Middlebarry');
    })

    it('should get the role', () => {
        expect(intern.getRole()).toEqual('Intern');
    })
})
