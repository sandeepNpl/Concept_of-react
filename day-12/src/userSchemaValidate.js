import { object,string} from "yup";
 export default object({
  email: string().email("email is invalid one").required(),
  password: string().required().min(7).max(20),
});
