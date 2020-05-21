import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import _ from 'lodash';

import ContactUs from './ContactUs';
import { feedbackCollection } from '../../utils/Firebase';

const ContactUsContainer = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, errors, reset } = useForm();
    const useFormProps = { register, handleSubmit, errors }

    const handleSendFeedback = (data) => {
        data.date = new Date();
        const filteredData = _.pickBy(data);
        feedbackCollection
        .add(filteredData)
        .then(() => {
            reset();
            setSuccess(true);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    return (
        <ContactUs 
            handleSendFeedback={handleSendFeedback} 
            success={success} 
            {...useFormProps}
        />
    )
}

export default ContactUsContainer;
