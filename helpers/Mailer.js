import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';


class Mailer {
  static sendWelcomeMail(email, emailToken) {
    const transporter = nodemailer.createTransport(
      sendgridTransport({
        auth: {
          api_key:
            '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',
        },
      }),
    );

    const url = `http://localhost:3000/api/v1/auth/confirmation?token=${emailToken}`; // change port number to env vars
    return transporter.sendMail({
      to: email,
      from: 'shop@node-complete.com',
      subject: 'Signup succeeded!',
      html: `
        <h1>You successfully signed up!</h1>
        <p>Please click this link to confirm your email: <a href="${url}">${url}</a></p>
        `,
    });
  }
  // Next class method
}

export default Mailer;
