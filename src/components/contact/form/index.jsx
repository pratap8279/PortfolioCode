import React from "react";

import { send } from 'emailjs-com';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import './style.scss'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        send(
            "service_g1t7lxj",
            "template_ytny7se",
            data,
            "zqB3wKa4yujEWegfx"

        ).then((response) => {
            console.log("success", response.status, response.text)
            formSuccess()

        }).catch((err) => {
            console.log("Failed...", err)
        });
    };

    const formSuccess = () => {
        toast("Thanks For Submitting Your Query")
        document.getElementById("queryForm").reset();
    }
    return <div className="query-form">
        <ToastContainer />
        <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
                <input type="text"
                    name="from_name"
                    placeholder="Name"
                    {...register("from_name", {
                        required: "Name is required",

                    })

                    }

                />
               { errors.from_name?.message&&( <p className="errors">{errors.from_name?.message}</p>)}
            </div>
            <div className="input-field">
                <input type="text"
                    name="reply_to"
                    placeholder="Email"
                    {...register("reply_to", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            meaasge: "Invalid Email Addsess "
                        }
                    })

                    }

                />
                  { errors.reply_to?.message&&( <p className="errors">{errors.reply_to?.message}</p>)}
            </div>
            <div className="input-field">
                <input type="text"
                    name="Phone_number"
                    placeholder="phone"
                    {...register("Phone_number", {
                        required: "Phone is required",
                        minLength: {
                            value: 8,
                            meaasge: "Invalid phoneNumber"
                        }
                    })

                    }


                />
                { errors.Phone_number?.message&&( <p className="errors">{errors.Phone_number?.message}</p>)}
                
            </div>
            <div className="input-field">
                <input type="text"
                    name="subject"
                    placeholder="Subject"
                    {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                            value: 10,
                            meaasge: " minimun 10 character is required"
                        }
                    })

                    }


                />
                     { errors.subject?.message&&( <p className="errors">{errors.subject?.message}</p>)}
              
            </div>
            <div className="input-field full-width">
                <textarea className="textarea"
                    name="message"
                    placeholder="Your message"
                    {...register("message", {
                        required: "Message is required",
                        minLength: {
                            value: 20,
                            meaasge: " minimun 20 character is required"
                        },
                        maxLength: {
                            value: 500,
                            meaasge: " max 500 character is required"
                        }
                    })

                    }


                ></textarea>
                { errors.message?.message&&( <p className="errors">{errors.message?.message}</p>)}
            </div>

            <button type="submit"> Submit</button>

        </form>
    </div>
};


export default Form;