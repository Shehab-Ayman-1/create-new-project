"use client";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProviders } from "next-auth/react";

import { Providers, FieldEvent, FormSubmitEvent } from "@/types";
import { Field, Form } from "@/components/ui";
import { useDispatch } from "@/hooks/useRedux";
import { useAxios } from "@/hooks/useAxios";
import { Loading } from "@/layout/Loading";
import { login } from "@/redux/users";
import { SignWithProvider } from "@/components/auth";

type Response = {
   user: {
      name: string;
      email: string;
      password: string;
      role: number;
   };
};

const Login = () => {
   const { data, loading, error, isSubmitted, refetch } = useAxios<Response>();

   const [formData, setFormData] = useState({ provider: "custome", email: "", password: "" });
   const [providers, setProviders] = useState<Providers>();

   const dispatch = useDispatch();
   const router = useRouter();

   useLayoutEffect(() => {
      (async () => {
         const providers = await getProviders();
         setProviders(providers as Providers);
      })();
   }, []);

   const handleFieldChange = (event: FieldEvent) => {
      setFormData((data) => ({ ...data, [event.target.name]: event.target.value }));
   };

   const handleSubmit = async (event: FormSubmitEvent) => {
      event.preventDefault();
      if (!Object.values(formData).every((p) => p)) return alert("ادخل جميع البيانات المطلوبة");

      const { data, isSubmitted, error } = await refetch("post", "/auth/login", formData);
      if (isSubmitted && error) return;

      dispatch(login(data?.user));
      router.push("/");
   };

   return (
      <Form
         onSubmit={handleSubmit}
         buttonText="Login"
         headerText="Sign In"
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

         <div className="">
            {providers?.google && (
               <SignWithProvider color="blue" icon="fa-google" provider={providers.google.id} />
            )}
            {providers?.github && (
               <SignWithProvider color="black" icon="fa-github" provider={providers.github.id} />
            )}
         </div>
      </Form>
   );
};

export default Login;
