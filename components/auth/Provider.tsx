"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button, Typography } from "@/components/ui";
import { Color } from "@/types";
import { useDispatch } from "@/hooks/useRedux";
import { login } from "@/redux";

type Provider = {
   provider: string;
   icon: string;
   color: Color | "black";
};

export const SignWithProvider = ({ provider, icon, color }: Provider) => {
   const router = useRouter();
   const dispatch = useDispatch();

   const handleSubmit = async () => {
      signIn(provider);
      // dispatch(login(user));
      router.push("/");
   };

   return (
      <Button color={color} className="mx-auto mb-4 px-4" fullWidth onClick={handleSubmit}>
         <i className={`fab ${icon} text-white hover:text-white`} />
         <Typography variant="h6" color="white">
            Sign In With {provider}
         </Typography>
      </Button>
   );
};
