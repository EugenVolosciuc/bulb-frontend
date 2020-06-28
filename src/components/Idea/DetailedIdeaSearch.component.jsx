import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import Paragraph from '../../components/UI/Paragraph.component'
import Button from '../../components/UI/Button.component'
import FormItem from '../../components/UI/FormItem.component'
import Select from '../../components/UI/Select.component'
import { DESIGN_TOPICS } from '../../constants'

const DetailedIdeaSearch = ({getRandomIdea}) => {
    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <div style={{ maxWidth: 450 }} className="mx-auto">
            <h3 className="text-3xl text-left white-text pb-3">Detailed Idea Search</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                    <FormItem
                        labelName="Topic"
                        formItemName="topic"
                        input={
                            <Select name="topic" ref={register}>
                                <option value="">No topic</option>
                                {Object.values(DESIGN_TOPICS).map(designTopic => (
                                    <option
                                        key={designTopic}
                                        value={designTopic.tag}>
                                        {designTopic.name}
                                    </option>
                                ))}
                            </Select>
                        } />
                </div>
                <div className="form-item">
                    <FormItem
                        labelName="Challenge"
                        formItemName="challenge"
                        input={
                            <Select name="challenge" ref={register}>
                                <option value="">No challenges</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Select>
                        } />
                </div>
                <div className="form-item">
                    <FormItem
                        labelName="Difficulty"
                        formItemName="difficulty"
                        input={
                            <Select name="difficulty" ref={register}>
                                <option value="">No difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="challenging">Challenging</option>
                            </Select>
                        } />
                </div>
            </form>
            <div className="flex mt-10 flex-col md:flex-row items-center">
                <Button onClick={getRandomIdea} type="bordered" className="mr-0 mb-6 md:mr-6 md:mb-0">Random idea</Button>
                <Button onClick={null}>Find your idea!</Button>
            </div>
        </div>
    )
}

export default DetailedIdeaSearch