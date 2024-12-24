import React from "react";
import Hero from "../products/Hero";
import Universe from "../products/Universe";
import LeftSection from "../products/LeftSection";
import RightSection from "../products/RightSection";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo->"
        learnMore="Learn more->"
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <RightSection 
        imageURL="media\images\console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more->"
      />
      <LeftSection
        imageURL="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore="Coin ->"
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <RightSection 
            imageURL="media\images\kiteconnect.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            learnMore="Lite Connect ->"
      />
      <LeftSection
        imageURL="media\images\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."

        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <p className="text-center">
      Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;