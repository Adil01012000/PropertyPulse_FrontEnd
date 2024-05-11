import Image from "next/image";
import Link from "next/link";

const CompareProperty = () => {
    return (
        <section className="our-cta pt0">
            <div className="cta-banner bgc-f7 mx-auto maxw1600 pt120 pt60-md pb120 pb60-md bdrs12 position-relative mx20-lg">
                <div className="img-box-5">
                    <Image
                        width={193}
                        height={193}
                        className="img-1 spin-right"
                        src="/images/about/element-1.png"
                        alt="spinner"
                    />
                </div>
                <div className="img-box-6">
                    <Image
                        width={193}
                        height={193}
                        className="img-1 spin-left"
                        src="/images/about/element-1.png"
                        alt="spinner"
                    />
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-xl-6 " data-aos="fade-right">
                            <div className="cta-style1">
                                <h2 className="cta-title">Compare Property</h2>
                                <p className="cta-text mb-0">
                                    Find the Best Choice For Yourself.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5 col-xl-6 " data-aos="fade-left">
                            <div className="cta-btns-style1 d-block d-sm-flex align-items-center justify-content-lg-end">
                                <Link
                                    href="/compare"
                                    className="ud-btn btn-transparent mr30 mr0-xs"
                                >
                                    Compare
                                    <i className="fal fa-arrow-right-long" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompareProperty;
