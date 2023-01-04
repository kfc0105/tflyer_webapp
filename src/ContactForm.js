import React from 'react'

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const {companyName, name, email, message} = e.target.elements
        let conFom = {
            companyName: companyName.value,
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return(
        <div className="container mt-5">
            <h2 className="mb-3">CONTACT</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="comapanyName">
                        会社名
                    </label>
                    <input className="form-control" type="text" id="companyName" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        お名前
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        メールアドレス
                    </label>
                    <input className="form-control" type="email" id="email" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        ご用件
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-danger" type="submit">
                {formStatus}
                </button>
            </form>
        </div>
    )
}

export default ContactForm