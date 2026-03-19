"use client";

import { SignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function SignInPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-500 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="mb-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight text-white"
          >
            Welcome back
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-sm text-slate-300"
          >
            Log in to continue to your account.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="flex items-center justify-center w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md">
            <SignIn
              appearance={{
                elements: {
                  card: "bg-transparent shadow-none border-0",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                  socialButtonsBlockButtonText: "text-white",
                  dividerLine: "bg-white/10",
                  dividerText: "text-slate-400",
                  formFieldLabel: "text-slate-200",
                  formFieldInput:
                    "bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:border-white/20 focus:ring-0",
                  footerActionText: "text-slate-400",
                  footerActionLink: "text-white hover:text-slate-200",
                  formButtonPrimary:
                    "bg-white text-slate-900 hover:bg-slate-100 shadow-none",
                  identityPreviewText: "text-white",
                  identityPreviewEditButton:
                    "text-slate-300 hover:text-white",
                  formResendCodeLink: "text-white hover:text-slate-200",
                  otpCodeFieldInput:
                    "bg-white/5 border border-white/10 text-white",
                  alertText: "text-red-300",
                  formFieldErrorText: "text-red-300",
                },
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}