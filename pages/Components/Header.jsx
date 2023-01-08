import Link from 'next/link';
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <div className={`${styles.headerLogo} p-0`} style={{ background: "#214752" }}>
      <div className='container-xxl py-sm-0 py-3'>
        <Link href="/">
          <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/dba5acde-manta-primary-logo-1_104d01l04d01e000003028.png" alt="#ImgNotFound" />
        </Link>
      </div>
    </div>
  )
}
