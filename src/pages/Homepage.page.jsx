import React from 'react'

import BasePage from '../components/Layouts/BasePage.component'
import Button from '../components/ui/Button.component'
import Paragraph from '../components/ui/Paragraph.component'
import bulb from '../static/images/bulb.svg'
import design_examples from '../static/images/design_examples.svg'
import collaborative from '../static/images/collaborative.svg'

const Homepage = () => {
    return (
        <BasePage>
            <section className="w-full h-screen flex items-center justify-center blue-bg">
                <div className="container">
                    <div className="flex flex-col justify-center white-text items-center -mt-10">
                        <img src={bulb} alt="Bulb" />
                        <h2 className="text-6xl mt-5 text-center">Stuck in a rut?</h2>
                        <h3 className="text-3xl mb-10 text-center">Get some design ideas</h3>
                        <div className="flex flex-col md:flex-row">
                            <Button className="mr-0 mb-6 md:mr-6 md:mb-0">Fast!</Button>
                            <Button type="bordered">In details</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full white-bg">
                <div className="container grid grid-cols-2 col-gap-8 pt-40">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl text-left">Get some design ideas</h3>
                        <Paragraph className=" mt-3 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos architecto nostrum voluptatem similique ea!</Paragraph>
                        <Button>Get Inspired</Button>
                    </div>
                    <div className="flex flex-col">
                        <img src={design_examples} alt="Design examples" />
                    </div>
                </div>
            </section>
            <section className="w-full white-bg">
                <div className="container grid grid-cols-2 col-gap-8 py-40">
                    <div className="flex flex-col">
                        <img src={collaborative} alt="Collaboration" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl text-left">Get some help on your projects</h3>
                        <Paragraph className=" mt-3 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos architecto nostrum voluptatem similique ea!</Paragraph>
                        <Button>Get Collaborative</Button>
                    </div>
                </div>
            </section>
        </BasePage>
    )
}

export default Homepage