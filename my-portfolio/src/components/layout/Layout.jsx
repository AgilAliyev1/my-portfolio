import Sidebar from './Sidebar'
import Navbar from './Navbar'
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout