import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  var transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "patrikbgmi@gmail.com",
      pass: "kvmm fiij bivz skqs",
    },
  });
  const options = {
    from: "patrikbgmi@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };
  await transporter.sendMail(options);
};