import Head from 'next/head'
import Navbar from './navbar'
export default function Layout({ children }) {
    return (
        <div className='container mx-auto'>
            <Head>
                <title>App</title> {/*quản lý thư viện */}
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='fixed container flex flex-col space-y-2 p-2 bg-gray-200'>
                <Navbar />
            </div>

            <div className='pt-14 bg-slate-100'>
                {children}
            </div>
        </div>
    )
}