import { User } from '../../../models/user'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

interface BioProps {
    user: User
}

const Bio = ({ user }: BioProps) => {
    console.log(JSON.stringify(user))
    const { avatar_url, bio, company } = user

    return (
        <div className='mx-auto bg-white rounded-xl shadow-md md:max-w-3xl'>
            <div className='md:flex'>
                <div className='md:shrink-0'>
                    <img className='rounded-t-xl object-contain md:h-[200px] w-full md:rounded-tr-none md:rounded-bl-xl' src={avatar_url} alt='profile' />
                </div>
                <div className='flex flex-col p-2 justify-between text-slate-500 text-lg'>
                    <p className=''>
                        {bio} Working as a Member Of the Technical Staff at {company}
                    </p>
                    <div className='flex flex-row-reverse gap-x-4'>
                        <a href='https://www.linkedin.com/in/ernischay/' target='_blank' rel='noreferrer'>
                            <BsLinkedin className='h-5 w-5 cursor-pointer' />
                        </a>
                        <a href='https://www.github.com/ernischay/' target='_blank' rel='noreferrer'>
                            <BsGithub className='h-5 w-5 cursor-pointer' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio
