import { API_URL } from '../utils/url'
import axios from 'axios'

const github = axios.create({
    baseURL: API_URL,
})

export class PortfolioService {
    async getInfo() {
        const [user, repos] = await Promise.all([github.get('/users/ernischay'), github.get('/users/ernischay/repos')])
        return { user: user.data, repos: repos.data }
    }
}
