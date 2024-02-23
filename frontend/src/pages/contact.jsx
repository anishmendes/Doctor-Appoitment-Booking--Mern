

import React from "react";

const Contact =  () => {
    return (
       <section>
        <section className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">
            Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para ">
        Got any issue? <br />Want to send us a feedback? Let us know.
        </p>
        <form action="" className="space-y-8 ">
            <section> 
                <label htmlFor="email" className="form__label "> Email</label>
                <input type="email"
                id="email"
                placeholder="exapmle@gmail.com"
                className="form__input mt-1" />
            </section>
            <section > 
                <label htmlFor="subject" className="form__label"> Subject</label>
                <input type="email"
                id="subject"
                placeholder="Let us know how we can help you"
                className="form__input mt-1" />
            </section>
            <section className="sm:col-span-2"> 
                <label htmlFor="message" className="form__label"> Message</label>
                <textarea type="email"
                id="message"
                rows={6}
                placeholder="Leave a comment..."
                className="form__input mt-1" />
            </section>
            <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
        </section>
       </section>
    )
}
export default Contact;