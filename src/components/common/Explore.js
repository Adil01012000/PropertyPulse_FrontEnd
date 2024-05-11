import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  
  const iconboxData = [
    {
      id: 1,
      icon: "/images/icon/property-buy.svg",
      title: "Buy a Property",
      text: "Unlock your dream home with a single click – explore and purchase your ideal property today!",
      linkText: "Buy",
    },
    {
      id: 2,
      icon: "/images/icon/property-sell.svg",
      title: "Rent a Property",
      text: "Discover your perfect rental oasis – find comfort and convenience in your new home today!",
      linkText: "Rent",
    },
    {
      id: 3,
      icon: "/images/icon/property-rent.svg",
      title: "Buy a Land",
      text: "Invest in your future – secure your own piece of land and build your dreams from the ground up!",
      linkText: "Buy",
    },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} 
        >
          <div className="iconbox-style2 text-center">
            <div className="icon">
              <Image width={150} height={150} src={item.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{item.title}</h4>
              <p className="text">{item.text}</p>
              <Link href="/grid-default" className="ud-btn btn-white2">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Explore;
