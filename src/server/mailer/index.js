import nodemailer from 'nodemailer'

import config from './config'

const transporter = nodemailer.createTransport({
  service: 'Zoho',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

const send = ({ email, name, subject, message, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'hello@polygon3d.xyz',
    subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send
