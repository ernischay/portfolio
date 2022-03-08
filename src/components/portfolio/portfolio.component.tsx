import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { StoreContext } from '../../store.context'
import Bio from './bio/bio.component'

const PortfolioView: React.FC = () => {
    const { portfolioStore } = useContext(StoreContext)
    const user = portfolioStore.getUserInfo()
    return (
        <div className='container mx-auto px-4 py-4 md:py-8 md:px-4'>
            <Bio user={user} />
        </div>
    )
}

const Portfolio = observer(PortfolioView)

export default Portfolio
