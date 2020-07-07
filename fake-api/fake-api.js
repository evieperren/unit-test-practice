async function getAllMentors (){
    return axios.get('https://localhost:3091/api/mentors')
}

async function getOneBySkill (){
    try {
        const returnedMentors = Mentor.find({skill: 'skill'})
        console.log(returnedMentors)
    }
    catch (error){
        console.log(error)
    }
}
module.exports = {
    getAllMentors,
    getOneBySkill
}