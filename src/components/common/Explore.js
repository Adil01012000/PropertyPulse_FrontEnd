import Image from "next/image";
import Link from "next/link";

const Explore = () => {

  return (
    <>
      <div
        className="col-sm-6 col-lg-4"
        data-aos="fade-up"
      >
        <div className="iconbox-style2 text-center">
          <div className="icon">
            <Image width={150} height={150}
              src={'/images/icon/property-buy.svg'}
              alt="icon" />
          </div>
          <div className="iconbox-content">
            <h4 className="title">Buy a Property</h4>
            <p className="text">Unlock your dream home with a single click – explore and purchase your ideal property today!</p>
            <Link href="/buy-property" className="ud-btn btn-white2">
              Buy
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-sm-6 col-lg-4"
        data-aos="fade-up"
      >
        <div className="iconbox-style2 text-center">
          <div className="icon">
            <Image width={150} height={150}
              src={'/images/icon/property-sell.svg'}
              alt="icon" />
          </div>
          <div className="iconbox-content">
            <h4 className="title">Rent a Property</h4>
            <p className="text">Discover your perfect rental oasis – find comfort and convenience in your new home today!</p>
            <Link href="/rent-property" className="ud-btn btn-white2">
              Rent
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-sm-6 col-lg-4"
        data-aos="fade-up"
      >
        <div className="iconbox-style2 text-center">
          <div className="icon">
            <Image width={150} height={150}
              src={'/images/icon/property-rent.svg'}
              alt="icon" />
          </div>
          <div className="iconbox-content">
            <h4 className="title">Buy a Land</h4>
            <p className="text">Invest in your future – secure your own piece of land and build your dreams from the ground up!</p>
            <Link href="/buy-land" className="ud-btn btn-white2">
              Buy
              <i className="fal fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
