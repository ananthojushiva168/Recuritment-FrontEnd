import * as Yup from 'yup';

export const forgotSchema  = Yup.object({
    otp:Yup.string().min(2).max(25).required('please enter valid OTP'),
    email:Yup.string().email().required('please enter  email'),
    password:Yup.string().min(6).required('enter your password'),
    confirmpassword:Yup.string().required().oneOf([Yup.ref('password'),null],"Password dosent matches"),
})

export const loginSchema = Yup.object({
     email:Yup.string().email().required('please enter  email'),
    password:Yup.string().min(6).required('enter your password')
})