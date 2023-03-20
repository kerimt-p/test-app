import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import {TextInput} from "@producter/Application/Component/Theme/Form/TextInput.styled";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <TextInput shade={0} error="Hata var!"/>

    </div>
  )
}
