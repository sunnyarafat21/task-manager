var nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {


    //
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'codersunnyarafat21@gmail.com',
    //         pass: '...sunny21###piha30...'
    //     }
    // });
    //
    // const mailOptions = {
    //     from: 'codersunnyarafat21@gmail.com',
    //     to: EmailTo,
    //     subject:  EmailSubject,
    //     text: EmailText
    // };

    let transporter = nodemailer.createTransport({
        host: 'mail.teamrabbil.com',
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: '~sR4[bhaC[Qs'
        },tls: {
            rejectUnauthorized: false
        },
    });


    let mailOptions = {
        from: 'Task Manager MERN <info@teamrabbil.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };


    return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility ;