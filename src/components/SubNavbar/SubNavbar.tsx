import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconType } from 'react-icons'
import styles from './SubNavbar.module.css'

/**
 * Declare type for using with this component
 */
export type SubRoute = {
  icon: IconType | null
  component: React.FC
  path: string
  text: string
}

type Props = { routes: SubRoute[] }

/**
 * This component will receive array of route as a props and
 * render icon together with text. This component also render
 * verticle line `|` between each `NavLink`
 */
export const SubNavbar = ({ routes }: Props) => {
  return (
    <div className={styles.wrapper}>
      {routes.map((route, index) => (
        <React.Fragment key={route.path}>
          {index !== 0 && <div className={styles.line} />}
          <NavLink
            to={route.path}
            className={`${styles.item} font-lg`}
            activeClassName={`${styles.active} font-lg`}
          >
            {route.icon && <route.icon className={styles.icon} />}
            {route.text}
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  )
}
