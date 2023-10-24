import Head from "next/head"
import styles from "./styles.module.css"
import { useRouter } from "next/navigation"

export default function HomePage() {

  const router = useRouter()

  function goToUser() {
    router.push('user')
  }

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <div className={styles.homeHeader}>
          <div>
            <button>Sair</button>
          </div>

          <h3>Listagem de Usuários</h3>

          <div>
            <button onClick={goToUser}>Add</button>
          </div>
        </div>
      </main>
    </>
  )
}