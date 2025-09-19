import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { clsx } from 'clsx'

const MotionLink = motion.create(Link);


export function PrimaryButton({ ahref = "/", variant = "primary", children }) {

  return (<MotionLink
    whileHover={{scale: 1.1}}
    to={ahref}
    className={clsx(
      "py-3 px-6 rounded-md text-center",
      variant === "primary" && "bg-[var(--color-hue1)] text-[var(--color-secondary)]",
      variant === "secondary" && "border border-[var(--color-hue1)] text-white"
    )}
  >
    {children}
  </MotionLink>)
}