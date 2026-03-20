"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@clerk/nextjs";
import Background1 from "@/components/background1";

export default function NotFound() {
  const { isSignedIn } = useAuth();

  return (
    <Background1>
      <div className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95 }}
          className="max-w-xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg leading-8 text-slate-300"
          >
            Sorry, the page you’re looking for does not exist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {isSignedIn ? (
              <Link
                href="/home"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] hover:bg-slate-100"
              >
                Go home
              </Link>
            ) : (
              <Link
                href="/sign-in"
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-white/10"
              >
                Sign in
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </Background1>
  );
}