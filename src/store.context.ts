import React from 'react'
import { PortfolioService } from './services/portfolio.service'
import { PortfolioStore } from './stores/portfolio.store'

interface IStoreContext {
    portfolioStore: PortfolioStore
}

const portfolioService = new PortfolioService()
const portfolioStore = new PortfolioStore(portfolioService)

export const StoreContext = React.createContext<IStoreContext>({
    portfolioStore,
})
