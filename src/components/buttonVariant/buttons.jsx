import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { clsx } from 'clsx'

const MotionLink = motion.create(Link);


export function PrimaryButton({ ahref = "/", variant = "primary", children }) {

  return (<MotionLink
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    to={ahref}
    className={clsx(
      "py-2 px-4 rounded-md text-center mt-5",
      variant === "primary" && "bg-white",
      variant === "secondary" && "border text-white"
    )}
  >
    {children}
  </MotionLink>)
}