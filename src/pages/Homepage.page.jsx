import React, { useState } from 'react'
import CustomAxios from 'config/axios'

import BasePage from '../components/Layouts/BasePage.component'
import Button from '../components/UI/Button.component'
import Paragraph from '../components/UI/Paragraph.component'
import Idea from '../components/Idea/Idea.component'
import DetailedIdeaSearch from '../components/Idea/DetailedIdeaSearch.component'

import bulb from '../static/images/bulb.svg'
import design_examples from '../static/images/design_examples.svg'
import collaborative from '../static/images/collaborative.svg'

const Homepage = () => {
    const [idea, setIdea] = useState(null)
    const [detailedSearchMode, setDetailedSearchMode] = useState(false)
    const [ideaIsLoading, setIdeaIsLoading] = useState(false)

    const getRandomIdea = async () => {
        setIdeaIsLoading(true)
        try {
            const response = await CustomAxios.get('/ideas/random')
            setIdea(response.data)
        } catch (error) {
            console.log(error)
        }
        setIdeaIsLoading(false)
    }

    const renderFirstSection = () => {
        if (ideaIsLoading) return <Paragraph className="text-white">Loading...</Paragraph>
        if (idea) return <Idea idea={idea} getRandomIdea={getRandomIdea} setDetailedSearchMode={() => {
            setIdea(null)
            setDetailedSearchMode(true)
        }} />
        if (detailedSearchMode) return <DetailedIdeaSearch getRandomIdea={() => {
            setDetailedSearchMode(false)
            getRandomIdea()
        }} />

        return (
            <div className="flex flex-col justify-center white-text items-center -mt-10">
                <img src={bulb} alt="Bulb" />
                <h2 className="text-6xl mt-5 text-center">Stuck in a rut?</h2>
                <h3 className="text-3xl mb-10 text-center">Get some design ideas</h3>
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                    <Button onClick={() => setDetailedSearchMode(true)} type="bordered" className="mr-0 mb-6 md:mr-6 md:mb-0">In details</Button>
                    <Button onClick={getRandomIdea}>Fast!</Button>
                </div>
            </div>
        )
    }

    return (
        <BasePage>
            <section className="w-full h-screen flex items-center justify-center blue-bg">
                <div className="container">{renderFirstSection()}</div>
            </section>
            <section className="w-full white-bg">
                <div className="container flex flex-col-reverse md:grid md:grid-cols-2 md:col-gap-8 pt-32 md:pt-40">
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <h3 className="text-3xl text-center md:text-left py-5 md:py-0">Get some design ideas</h3>
                        <Paragraph className="mt-3 mb-10 text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos architecto nostrum voluptatem similique ea!</Paragraph>
                        <Button>Get Inspired</Button>
                    </div>
                    <div className="flex flex-col">
                        <img src={design_examples} alt="Design examples" />
                    </div>
                </div>
            </section>
            <section className="w-full white-bg">
                <div className="container flex flex-col md:grid md:grid-cols-2 md:col-gap-8 py-32 md:py-40">
                    <div className="flex flex-col">
                        <img src={collaborative} alt="Collaboration" />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <h3 className="text-3xl text-center md:text-left py-5 md:py-0">Get some help on your projects</h3>
                        <Paragraph className="mt-3 mb-10 text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos architecto nostrum voluptatem similique ea!</Paragraph>
                        <Button>Get Collaborative</Button>
                    </div>
                </div>
            </section>
        </BasePage>
    )
}

export default Homepage