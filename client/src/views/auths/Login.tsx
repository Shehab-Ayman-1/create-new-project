import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FieldEvent, FormSubmitEvent } from "@/types";

import { Field, Form } from "@/components/ui";
import { useAxios } from "@/hooks/useAxios";
import { Loading } from "@/layout/Loading";
import { login } from "@/redux/users";

type Response = {
   user: {
      name: string;
      email: string;
      password: string;
      role: number;
   };
};

export const Login = () => {
   const [formData, setFormData] = useState({ email: "", password: "" });
   const { data, loading, error, isSubmitted, refetch } = useAxios<Response>();

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleFieldChange = (event: FieldEvent) => {
      setFormData((data) => ({ ...data, [event.target.name]: event.target.value }));
   };

   const handleSubmit = async (event: FormSubmitEvent) => {
      event.preventDefault();
      if (!Object.values(formData).every((p) => p)) return alert("ادخل جميع البيانات المطلوبة");

      /* EXPERMENTAL */
      const user = { ...formData, name: "Shehab Ayman", role: 5051 };
      if (formData.email && formData.password) {
         dispatch(login(user));
         navigate("/");
         sessionStorage.setItem("user", JSON.stringify(user));
         return;
      }

      const { data, isSubmitted, error } = await refetch("post", "/users/login", formData);
      if (isSubmitted && error) return;

      dispatch(login(data?.user));
      sessionStorage.setItem("user", JSON.stringify(data?.user));

      navigate("/");
   };

   return (
      <Form
         onSubmit={handleSubmit}
         text={{ header: "Login", button: "Sign In" }}
         loading={(isSubmitted && !error) || loading}
      >
         <Loading isSubmitted={isSubmitted} loading={loading} error={error} message={data} to="/" />

         <Field
            label="Email:"
            name="email"
            value={formData.email}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />

         <Field
            type="password"
            label="Password:"
            name="password"
            value={formData.password}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />
      </Form>
   );
};
