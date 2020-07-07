jest.mock('./getAllMentors')
jest.mock('./getOneBySkill')
const getAllMentors = require('./getAllMentors')
const getOneBySkill = require('./getOneBySkill')
const responseData = require('./responseData.json')

describe("Fake API test suite", () => {
    beforeEach(() => {
        getAllMentors.mockImplementation(() => {
            return []
        })
    })
    it('should be defined', () => {
        expect(getAllMentors).toBeDefined()
    })
    it('should return an array of 3 mentors', () => {
        getAllMentors.mockImplementation(() => {
            return [
                responseData, 
                responseData,
                responseData
            ]
        })
        expect(getAllMentors()).toHaveLength(3)
    })
    xit('should it should throw an error when it does not find any mentors to return', () => {
        getAllMentors.mockImplementation(() => {
            return []
        })
        expect(getAllMentors()).toThrow()
    } )

    describe('testing API functionality', () => {
        it('should be defined', () => {
            expect(getOneBySkill).toBeDefined()
        })
        it('should return a mentor with a matching skill', () => {
            getOneBySkill.mockImplementation(() => { 
                return responseData
            })
            expect(getOneBySkill('skill one')).toEqual(responseData)
        })
    })
})