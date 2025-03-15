import { Button } from "@/components";
import personFirst from "@/assets/images/svg/person-1.svg";
import personSecond from "@/assets/images/svg/person-2.svg";
import personThird from "@/assets/images/svg/person-3.svg";
import personFourth from "@/assets/images/svg/person-4.svg";
import personFifth from "@/assets/images/svg/person-5.svg";
import personSixth from "@/assets/images/svg/person-6.svg";
import * as yup from "yup";

export const configureParticipatingSteps = (openModal: () => void) => [
  { id: 1, content: "Subscribe to our News" },
  {
    id: 2,
    content: <Button onClick={openModal}>SIGN UP</Button>,
  },
  { id: 3, content: "Check your email inbox" },
  { id: 4, content: "Wait till September 22" },
];

export const profiles = [
  { id: 6, imageUrl: personSixth, alt: "Profile 6" },
  { id: 1, imageUrl: personFirst, alt: "Profile 1" },
  { id: 2, imageUrl: personSecond, alt: "Profile 2" },
  { id: 5, imageUrl: personFifth, alt: "Profile 5" },
  { id: 4, imageUrl: personFourth, alt: "Profile 4" },
  { id: 3, imageUrl: personThird, alt: "Profile 3" },
];

export const signupFormSchema = yup
  .object({
    email: yup.string().email().required("Please enter a valid e-mail"),
    password: yup
      .string()
      .required("Please enter a valid password")
      .min(6, "Password must be at least 8 characters"),
  })
  .required();
