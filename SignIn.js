import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "@/app/firebase/firebase-confing";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { setShowSignInBox } from "@/app/redux/features/authSlice";
import Alert from "../SignUpAlert/Alert";
import { useTranslations } from "next-intl";

import Spinner from "../Spinner/Spinner";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const t = useTranslations("SignIn");
  const schema = yup
    .object({
      email: yup
        .string()
        .email(`${t("please enter a valid email address")}`)
        .required(`${t("email is a required field")}`),
      password: yup
        .string()
        .required(`${t("password is a required field")}`)
        .min(6, `${t("password must be at least 6 characters long")}`),
    })
    .required();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const containerRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const onsubmit = async (data) => {
    setIsLoading(true)
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      dispatch(setShowSignInBox());
      let userName = data.email.split("@")[0];
      toast.success(
        `${t("Congratulations")} ${userName[0].toUpperCase() + userName.slice(1).replace(/[0-9]/g, '')
        }! ${t("You have successfully logged in")}.`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          draggable: false,
        }
      );
    } catch (err) {
     toast.error(
        `${t("Invalid credentials")}. ${t(
          "Please check your email and password and try again!"
        )}`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          draggable: false
        });
    } finally {
      setIsLoading(false)
    }
  };
