import React from "react";
import Head from "next/head";
import styles from './styles.module.css'
import { useRouter } from "next/navigation";
import MyInput from '../../components/input'

export default function LoginPage() {

    const router = useRouter() //SETA A ROTA DE REDIRECIONAMENTO

    const [login, setLogin] = React.useState('') //VARIÁVEL DE ESTADO
    const [password, setPassword] = React.useState('')

    function signIn() {
        if (login == '') {
            router.replace('home')
        }
    }

    return (
        <>
            <div>
                <Head>
                    <title>Acesso ao Sistema</title>

                    <MyInput
                        label = 'Login' //parameto enviado ao Input do components
                        onChange={ event => setLogin(event.target.value)} //parameto enviado ao Input do components
                    />
                </Head>
                <main className={styles.loginMain}>
                    <div className={styles.divInput}>
                        <label className={styles.label}>Login:</label>
                        <input className={styles.input} type="text" onChange={event => setLogin(event.target.value)} />
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Senha:</label>
                        <input className={styles.input} type="password" onChange={event => setPassword(event.target.value)} />
                    </div>

                    <button className={styles.loginButton} onClick={signIn}>Entrar</button>
                </main>
            </div>
        </>
    )
}