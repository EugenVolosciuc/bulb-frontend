import React, { useState } from 'react'
import isEmpty from 'lodash/isEmpty'

import Paragraph from 'components/UI/Paragraph.component'
import Button from 'components/UI/Button.component'

const IdeaShowcase = ({ idea, getRandomIdea, setDetailedSearchMode }) => {
    const [currentIdeaExample, setCurrentIdeaExample] = useState(isEmpty(idea.examples) ? null : idea.examples[0])

    const indexOfCurrentExample = idea.examples.findIndex(example => example._id === currentIdeaExample._id)

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 md:col-gap-8">
            <div className="flex flex-col justify-center items-center md:items-start pb-10 md:pb-0">
                <h3 className="text-3xl mb-5 text-center md:text-left text-white">{idea.title}</h3>
                <Paragraph className="mb-5 text-white text-center md:text-left">{idea.description}</Paragraph>
                <div className="flex flex-col md:flex-row">
                    <Button onClick={getRandomIdea} className="mr-0 mb-6 md:mr-6 md:mb-0">Search again</Button>
                    <Button onClick={setDetailedSearchMode} type="bordered">In details</Button>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                {
                    isEmpty(idea.examples)
                        ? null
                        : <>
                            <div className="flex justify-between">
                                <a
                                    href={currentIdeaExample.url}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="text-3xl mb-5 text-left text-white">
                                    {currentIdeaExample.title}
                                </a>
                                <span className="flex items-center mb-5">
                                    <span className="w-8">
                                        {
                                            indexOfCurrentExample > 0 &&
                                            <i onClick={() => setCurrentIdeaExample(idea.examples[indexOfCurrentExample - 1])} className="fas fa-chevron-left fa-lg text-white"></i>
                                        }
                                    </span> 
                                    <span className="w-5">
                                        {
                                            indexOfCurrentExample < idea.examples.length - 1 &&
                                            <i onClick={() => setCurrentIdeaExample(idea.examples[indexOfCurrentExample + 1])} className="fas fa-chevron-right fa-lg text-white"></i>
                                        }
                                    </span>
                                </span>
                            </div>
                            <img
                                className="max-w-full max-h-full rounded-lg"
                                src="https://cdn.dribbble.com/users/2742725/screenshots/12048036/media/2815ec7c4ed4cd4323de68a68c391426.png"
                                alt="Temporary replacement" />
                        </>
                }
            </div>
        </div>
    )
}

export default IdeaShowcase