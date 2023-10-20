import Yup from "./_validation";

export const PersonalSchema = Yup.object().shape({
  nameSurname: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string(),
  address: Yup.string(),
  gsm: Yup.number(),
  letter: Yup.string().email().required(),
  photo: Yup.mixed()
 
});
