"use client";
import { useLayoutEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Providers, FieldEvent, FormSubmitEvent } from "@/types";
import { SignWithProvider } from "@/components/auth";
import { Field, Form } from "@/components/ui";
import { Loading } from "@/layout/Loading";

const ProvidersButton = ({ providers }: { providers: Providers }) => {
   return (
      <div className="mt-6 px-3">
         {providers?.google && <SignWithProvider color="blue" icon="fa-google" provider={providers.google.id} />}
         {providers?.github && <SignWithProvider color="black" icon="fa-github" provider={providers.github.id} />}
      </div>
   );
};

const Login = () => {
   const router = useRouter();

   const [loading, setLoading] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [error, setError] = useState("");

   const [formData, setFormData] = useState({ process: "login", email: "", password: "", redirect: false });
   const [providers, setProviders] = useState<Providers>();

   useLayoutEffect(() => {
      (async () => {
         const providers = await getProviders();
         setProviders(providers as Providers);
      })();
   }, []);

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
      else setError("Invalid Email OR Password");

      setLoading(false);
      setIsSubmitted(true);
   };

   return (
      <Form
         onSubmit={handleSubmit}
         text={{ header: "Sign In", button: "Login" }}
         loading={(isSubmitted && !error) || loading}
         renderAfterButton={<ProvidersButton providers={providers as Providers} />}
      >
         <Loading isSubmitted={isSubmitted} loading={loading} error={error} message={{ error }} />

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

export default Login;
