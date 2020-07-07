async function getAllMentors (){
    return axios.get('https://localhost:3091/api/mentors')
}

module.exports = getAllMentors