async function getOneBySkill (skill){
    try {
        const returnedMentors = Mentor.find({skill: skill})
        console.log(returnedMentors)
    }
    catch (error){
        console.log(error)
    }
}

module.exports = getOneBySkill