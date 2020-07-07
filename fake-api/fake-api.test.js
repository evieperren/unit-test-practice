jest.mock('./fake-api')
const getAllMentors = require('./fake-api')

describe("Fake API test suite", () => {
    beforeEach(() => {
        
    })
    it('should be defined', () => {
        expect(getAllMentors).toBeDefined()
    })
    it('should return an array of 2 mentors', () => {
        getAllMentors.mockImplementation(() => {
            return [{
                name: 'Evie',
                bio: 'Bio here',
                skills: ['skill one, skill two'],
                contactDetails: {
                    email: 'evie.perren@simplyhealth.co.uk',
                    telephone: '0123456789'
                },
                waysOfWorking: {
                    email: true,
                    faceToFace: true,
                    teams: true,
                    phone: true
                },
                availablility: true
            }, 
            {
                name: 'Evie',
                bio: 'Bio here',
                skills: ['skill one, skill two'],
                contactDetails: {
                    email: 'evie.perren@simplyhealth.co.uk',
                    telephone: '0123456789'
                },
                waysOfWorking: {
                    email: true,
                    faceToFace: true,
                    teams: true,
                    phone: true
                },
                availablility: true
            }]
        })
        expect(getAllMentors()).toHaveLength(2)
    })
    it('should it should throw an error when it does not find any mentors to return', () => {
        getAllMentors.mockImplementation(() => {
            return []
        })
        expect(getAllMentors()).toThrow()
    } )
})