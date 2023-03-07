import { navigate } from '../Link.jsx'

export default function AboutPage() {
  return (
    <>
      <h1>Sobre mí</h1>
      <img src="https://yt3.googleusercontent.com/ytc/AL5GRJU7ldTyaJ6qrzt_vPuLxH4sPrSwO8BYjcbab903=s176-c-k-c0x00ffffff-no-rj" alt="Oscartic" />
      <p>Hola me llamo Oscar y estamos haciendo con midu este proyecto. Enjoy!</p>
      <button onClick={() => navigate('/')}>Home</button>
    </>
  )
}
