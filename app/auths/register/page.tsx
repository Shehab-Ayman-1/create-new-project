"use client";
import { useLayoutEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FieldEvent, FormSubmitEvent, Providers } from "@/types";
import { Field, Form, Selectbox } from "@/components/ui";
import { SignWithProvider } from "@/components/auth";
import { Loading } from "@/layout/Loading";

const ProvidersButton = ({ providers }: { providers: Providers }) => {
   return (
      <div className="mt-6 px-3">
         {providers?.google && <SignWithProvider color="blue" icon="fa-google" provider={providers.google.id} />}
         {providers?.github && <SignWithProvider color="black" icon="fa-github" provider={providers.github.id} />}
      </div>
   );
};

const ROLES = ["Admin", "User"];
const formState = { process: "register", name: "", email: "", password: "", role: 0, redirect: false };
const Register = () => {
   const router = useRouter();

   const [loading, setLoading] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [error, setError] = useState("");
   const [formData, setFormData] = useState(formState);
   const [providers, setProviders] = useState<Providers>();

   useLayoutEffect(() => {
      (async () => {
         const providers = await getProviders();
         setProviders(providers as Providers);
      })();
   }, []);

   const handleSelectChange = (name: string, value?: string) => {
      setFormData((data) => ({ ...data, [name]: value }));
   };

   const handleFieldChange = (event: FieldEvent) => {
      setIsSubmitted(false);
      setFormData((data) => ({ ...data, [event.target.name]: event.target.value }));
   };

   const handleSubmit = async (event: FormSubmitEvent) => {
      event.preventDefault();
      if (!formData.email || !formData.password) return alert("Please Enter All The Required Fields");

      setLoading(true);
      setIsSubmitted(false);
      setError("");

      const response = await signIn("credentials", formData);
      if (response?.ok) router.push("/");
      else setError("This Email Is Already Exist");

      setLoading(false);
      setIsSubmitted(true);
   };

   return (
      <Form
         onSubmit={handleSubmit}
         headerText="Sign Up"
         buttonText="Register"
         loading={(isSubmitted && !error) || loading}
         renderAfterButton={<ProvidersButton providers={providers as Providers} />}
      >
         <Loading isSubmitted={isSubmitted} loading={loading} error={error} message={{ error }} />

         <Field
            label="Name:"
            name="name"
            value={formData.name}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />

         <Field
            label="Email:"
            type="email"
            name="email"
            value={formData.email}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />

         <Field
            label="Password:"
            type="password"
            name="password"
            value={formData.password}
            styles={{ input: "normal-case" }}
            onChange={handleFieldChange}
         />

         <Selectbox
            label="Account Type:"
            value={formData.role}
            options={ROLES}
            onChange={(value) => handleSelectChange("role", value)}
         />
      </Form>
   );
};

export default Register;
