import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ children, variant = "primary", href }) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
