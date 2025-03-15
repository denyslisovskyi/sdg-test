import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, Typography, Modal, Button } from "@/components";
import styles from "./Home.module.scss";
import {
  configureParticipatingSteps,
  profiles,
  signupFormSchema,
} from "./constants";
import Heart from "@/assets/images/svg/heart.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import services from "@/services";
import { AxiosError } from "axios";
import { storeXToken } from "@/utils";
import { ISignupRequest } from "@/types";
import { paths } from "@/router";

type FormInputs = {
  email: string;
  password: string;
};

const Home = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [isGratitudeModalOpen, setIsGratitudeModalOpen] =
    useState<boolean>(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(signupFormSchema),
    mode: "onChange",
  });

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const openGratitudeModal = () => {
    setIsGratitudeModalOpen(true);
  };

  const closeGratitudeModal = () => {
    setIsGratitudeModalOpen(false);
  };

  async function checkUserExists(data: ISignupRequest) {
    try {
      const response = await services.authorization.login(data);

      storeXToken(response);

      return true;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError) {
        // Do something
      }

      return false;
    }
  }

  const onSignupFormSubmit = async (data: ISignupRequest) => {
    try {
      const isUserExist = await checkUserExists(data);

      if (!isUserExist) {
        const response = await services.authorization.signup(data);

        storeXToken(response);
      }

      closeSignupModal();
      openGratitudeModal();

      navigate(paths.authenticatedScreen);
    } catch (error) {
      throw error;
    }
  };

  const participatingSteps = configureParticipatingSteps(openSignupModal);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profilesContainer}>
          {profiles.map((profile) => (
            <div key={profile.id} className={styles.profileCircle}>
              <img src={profile.imageUrl} alt={profile.alt} />
            </div>
          ))}
          <div className={styles.heartContainer}>
            <img src={Heart} alt="Heart" className={styles.heartIcon} />
            <div className={styles.heartOutline}></div>
          </div>
        </div>

        <div>
          <Typography variant="h1" color="gradient" className={styles.title}>
            How to
            <br />
            Participate
          </Typography>
          <List steps={participatingSteps} />
        </div>
      </div>
      <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
        <Typography variant="h3" className={styles.modalTitle}>
          To register, enter the mail to which our news is sent and set your
          password
        </Typography>

        <form
          onSubmit={handleSubmit(onSignupFormSubmit)}
          className={styles.modalForm}
          noValidate
        >
          <div className={styles.formGroup}>
            <input
              type="email"
              {...register("email")}
              className={`${styles.formInput} ${
                errors.email ? styles.errorInput : ""
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <div className={styles.errorContainer}>
                <span className={styles.errorDot}></span>
                <span className={styles.errorMessage}>
                  {errors.email.message}
                </span>
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="password"
              {...register("password")}
              className={`${styles.formInput} ${
                errors.password ? styles.errorInput : ""
              }`}
              placeholder="Password"
            />
            {errors.password && (
              <div className={styles.errorContainer}>
                <span className={styles.errorDot}></span>
                <span className={styles.errorMessage}>
                  {errors.password.message}
                </span>
              </div>
            )}
          </div>

          <Button className={styles.submitButton}>SUBMIT</Button>
        </form>
      </Modal>
      <Modal isOpen={isGratitudeModalOpen} onClose={closeGratitudeModal}>
        <Typography
          variant="h1"
          color="gradient"
          className={styles.gratitudeModalTitle}
        >
          Thank You
        </Typography>
        <Typography variant="h3">
          To complete registration, please check your e-mail
        </Typography>
      </Modal>
    </>
  );
};

export default Home;
