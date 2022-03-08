import { makeAutoObservable } from 'mobx'
import { PortfolioService } from '../services/portfolio.service'
import { User } from '../models/user'

export class PortfolioStore {
    private userInfo: User = {
        avatar_url: '',
        company: '',
        location: '',
        bio: '',
    }

    constructor(private readonly portfolioService: PortfolioService) {
        makeAutoObservable(this)
        this.getInfo()
    }

    async getInfo() {
        try {
            const data = await this.portfolioService.getInfo()
            this.setUserInfo(data.user)
        } catch (err) {
            console.error(err)
        }
    }

    setUserInfo(userData: User) {
        const { avatar_url, company, location, bio } = userData
        this.userInfo = {
            avatar_url,
            company,
            location,
            bio,
        }
    }

    getUserInfo() {
        return this.userInfo
    }
}
