import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
        <>
            <div className={`${styles.FooterBeforeMDScrn}`} style={{ background: "#214752" }}>
                <div className='container-xxl py-5'>
                    <div className="row">
                        <div className="col-6">
                            <img src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/dba5acde-manta-primary-logo-1_104d01l04d01e000003028.png" alt="#ImgNotFound" />
                            <h4 className={`${styles.tabSize} text-white px-3`}>© 2022 Manta Media Inc.All rights reserved</h4>
                        </div>
                        <div className="col-6" style={{ textAlign: "right" }}>
                            <h4 className={`${styles.tabSize} text-white px-3`}><b>Questions? Call us today</b></h4>
                            <h4 className={`${styles.tabSize} text-white px-3`}><b>1 (888) 260-4034</b></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.FooterAfterMDScrn}`} style={{ background: "#214752" }}>
                <div className='container-xxl py-3 text-center'>
                    <h5 className={`${styles.tabSize} text-white px-3`}><b>Questions? Call us today</b></h5>
                    <h5 className={`${styles.tabSize} text-white px-3`}><b>1 (888) 260-4034</b></h5>
                    <img className='my-4' src="https://d9hhrg4mnvzow.cloudfront.net/get.manta.com/free-consultation-clutch/dba5acde-manta-primary-logo-1_104d01l04d01e000003028.png" alt="#ImgNotFound" />
                    <p className='text-white'>© 2022 Manta Media Inc.All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
