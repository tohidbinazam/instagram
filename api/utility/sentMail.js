import sgMail from '@sendgrid/mail'

const sentMail = async (to, subject, html) => {
    try {

        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            from: 'itvtexltd@gmail.com',
            to, subject, html
        }

        await sgMail.send(msg)

    } catch (error) {
        console.log(error);
    }

}

export default sentMail