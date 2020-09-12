import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = { content }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const addLike = async (updatedContent) => {
    const object = { 
        content: updatedContent.content, 
        votes: updatedContent.votes
    }
    const response = await axios.put(`${baseUrl}/${updatedContent.id}`, object)
    return response.data
}

export default { getAll, createNew, addLike }