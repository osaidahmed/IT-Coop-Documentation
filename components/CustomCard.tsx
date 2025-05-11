import React from 'react'
import styles from './CustomCard.module.css'

interface CustomCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  children?: React.ReactNode
}

export default function CustomCard({
  title,
  description,
  icon,
  href,
  children
}: CustomCardProps) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {children}
      </div>
      {href && (
        <a className={styles.cardLink} href={href} target="_blank" rel="noopener noreferrer">
          Learn more →
        </a>
      )}
    </div>
  )
}
