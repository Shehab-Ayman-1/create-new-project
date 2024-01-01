import { DBConnection } from "@/utils";
import { Users } from "@/models";
import bcrypt from "bcrypt";

const send = (response: any, status: number = 400) => {
   if (status === 200) return new Response(JSON.stringify(response), { status: 200 });
   if (status === 400) return new Response(JSON.stringify(response), { status: 400 });
};

export const POST = async (req: Request) => {
   const { provider, email, password } = await req.json();
   if (provider !== "custome" || !email || !password) return send({ error: "Something Happened Is Wronge" });
   DBConnection();

   const exist = await Users.findOne({ email });
   if (!exist) return send({ error: "Email OR Password Is Wronge" });

   const hashPassword = await bcrypt.hashSync(password, 10);
   await Users.create({ image: "", email, password: hashPassword });

   return new Response(JSON.stringify({ success: "The Email Was Successfully Created." }), { status: 200 });
};
