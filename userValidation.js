import * as  yup from "yup";  62.4k (gzipped: 19.4k) 

 export  const userschema = yup.object().shape({
    name: yup.string().reruired(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),

});
