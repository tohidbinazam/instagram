import nodemailer from 'nodemailer'

const mailByEmail = async (to, subject, html) => {

    const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        auth : {
            user : 'itvtexltd@gmail.com',
            pass : 'hjujfcrtkwqmqpax'
        }
    })

    await transporter.sendMail({
        from : 'IT V-Tex Ltd <itvtexltd@gmail.com>',
        to, subject, html
    })
}


export default mailByEmail