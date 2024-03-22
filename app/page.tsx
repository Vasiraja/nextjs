import Image from 'next/image';
import vayals from './vayals.svg';
import biriyani from './biriyani.webp';
import rice from './rice.webp';
import billing from './billing.webp'
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 relative">
      <div className="insidecontainer">
      <div className="flex flex-row items-center justify-between max-w-7xl mb-10">
        <a href="/">
          <img alt="logo" loading="lazy" width="1000" height="1000" decoding="async" src={vayals} className="w-24 h-auto" />
        </a>
        <ul className="flex gap-5 text-black">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Catering</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Vayals Kitchen</h1>
        <p className="text-lg mb-8">Immerse yourself in a culinary journey & indulge in the vibrant tastes of India</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="border p-4 rounded-lg relative dish">
          <Image
            alt="Biriyani"
            src={biriyani}
            width={300}
            height={300}
            layout="responsive"
            className="dish-image"
          />
        </div>
        <div className="border p-4 rounded-lg relative dish">
         
          <Image
            alt="Rice"
            src={rice}
            width={300}
            height={300}
            layout="responsive"
            className="dish-image"
          />
        </div>
        </div>
        <div className="footerdiv">
      <div className="footerbutton flex flex-grow gap-x-1.5 rounded-xl bg-green p-1.5 text-white shadow-xl md:flex-grow-0 cursor-pointer"><div className=" text-white text-xl py-5 w-full text-center border tracking-wide border-white rounded-lg hover:bg-white hover:text-green">Order online</div><a target="blank" className=" text-white text-xl  py-5 w-full text-center border tracking-wide border-white rounded-lg hover:bg-white hover:text-green" href="https://www.grubhub.com/restaurant/vayals-indian-kitchen-507-w-thomas-rd-phoenix/7584032">Grubhub</a></div>
        </div>
      </div>
      <section className="bg-white pb-16">
        <div className="desktop w-full flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto px-5 triggerParent">
          <div className="pin-spacer" style={{ width: '610px', height: '367px', padding: '0px' }}>
            <div className="dinewithusstatic right lg:h-screen flex flex-col justify-start lg:justify-start items-start lg:items-start text-black w-full lg:w-1/2 pt-10">
              <h1 className="text-7xl md:text-[100px] lg:max-w-[540px] hidden lg:block">Why Dine<br />With Us</h1>
              <h1 className="text-5xl md:text-[100px] lg:max-w-[540px] lg:hidden">Why Dine With Us</h1>
              <p className="text-xl md:text-2xl leading-[150%] font-work lg:max-w-[540px] mt-5">
                Whether you're a connoisseur of Indian cuisine or trying it for the first time, a memorable experience awaits at Vayal's Kitchen. From our flavorful dishes to our warm ambiance, every detail is designed to immerse you in the vibrant flavors and hospitality of India.
              </p>
            </div>
          </div>
          <div className="left h-full lg:w-1/2 pt-10 grid grid-cols-1 min-[900px]:grid-cols-2 lg:grid-cols-1 gap-20 md:gap-[100px]">
            <div className="flex flex-row gap-5 md:gap-7">
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                <Image src="./family.svg" alt="Authentic Indian Flavors" loading="lazy" width="3000" height="3000" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: 'transparent' }}  />
              </div>
              <div className="max-w-[320px] flex justify-center items-start flex-col">
                <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">Authentic Indian Flavors</p>
                <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                  Experience the true taste of India with our authentic and traditional recipes, prepared with the finest ingredients &amp; aromatic spices.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 md:gap-7">
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                <img alt="Warm and Vibrant Ambiance" loading="lazy" width="3000" height="3000" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: 'transparent' }}  />
              </div>
              <div className="max-w-[320px] flex justify-center items-start flex-col">
                <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">Warm and Vibrant Ambiance</p>
                <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                  Step into a cozy and vibrant atmosphere that enhances your dining experience, whether you're enjoying a meal with friends, family, or colleagues.
                </p>
              </div>
            </div>






            <div className="flex flex-row gap-5 md:gap-7">
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                <img alt="Warm and Vibrant Ambiance" loading="lazy" width="3000" height="3000" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: 'transparent' }}   />
              </div>
              <div className="max-w-[320px] flex justify-center items-start flex-col">
                <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">Extensive Menu Selection</p>
                <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                    Our menu boasts a wide selection of dishes, ensuring there's something to delight every palate                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 md:gap-7">
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                <img alt="Warm and Vibrant Ambiance" loading="lazy" width="3000" height="3000" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: 'transparent' }}   />
              </div>
              <div className="max-w-[320px] flex justify-center items-start flex-col">
                <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">Vegan and Gluten-Free Options</p>
                <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                  We cater to dietary preferences with a variety of vegan and gluten-free dishes that are as delicious as they are satisfying.</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 md:gap-7">
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                <img alt="Warm and Vibrant Ambiance" loading="lazy" width="3000" height="3000" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: 'transparent' }}  />
              </div>
              <div className="max-w-[320px] flex justify-center items-start flex-col">
                <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">Exceptional Service</p>
                <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                  Our attentive staff are dedicated to providing you with a memorable dining experience. </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 md:gap-7">
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                <img alt="Warm and Vibrant Ambiance" loading="lazy" width="3000" height="3000" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: 'transparent' }}   />
              </div>
              <div className="max-w-[320px] flex justify-center items-start flex-col">
                <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">Hygiene and Safety</p>
                <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                    We prioritize your health and safety by maintaining strict hygiene standards and adhering to all safety protocols.              </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 md:gap-7">
              <div className="w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                <img alt="Warm and Vibrant Ambiance" loading="lazy" width="3000" height="3000" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: 'transparent' }}  />
              </div>
              <div className="max-w-[320px] flex justify-center items-start flex-col">
                <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">Cultural Experience</p>
                <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                    Immerse yourself in the vibrant culture of India through our decor, music, and hospitality, creating a truly authentic dining experience.               </p>
              </div>
            </div>
             
          </div>
        </div>
      </section>
      <div className="desktop w-full flex flex-col-reverse lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="right h-full w-full min-w-1/2 lg:max-w-[540px] flex flex-col gap-10 px-5 sm:px-10">
          <h1 className="text-7xl md:text-[100px] hidden lg:block">our catering services</h1>
          <div className="flex flex-row items-start gap-5 lg:max-w-[410px]">
            <img
              alt="Event Variety & Menu Selection"
              loading="lazy"
              width="3000"
              height="3000"
              decoding="async"
              data-nimg="1"
              className="w-16 h-auto rounded-full aspect-square"
              style={{ color: 'transparent' }}
             />
            <div className="flex justify-start items-start flex-col">
              <p className="text-3xl md:text-[40px] leading-[100%] font-bold text-green font-work">
                Event Variety & Menu Selection
              </p>
              <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                Whether it's a wedding, family celebration, friends gathering, graduation celebration, bridal shower, baby shower, community celebrations or corporate dinner, we can cater to your needs ensuring a memorable and delicious experience for you and your guests. Our experienced event coordinators will help you select menus that suit your event and guests' preferences. We are happy to assist you whether you're planning an outdoor party for 500+ or a friendly indoor gathering&nbsp;for&nbsp;40.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-5 lg:max-w-[410px]">
            <img
              alt="Service Options & Customizable Menus"
              loading="lazy"
              width="3000"
              height="3000"
              decoding="async"
              data-nimg="1"
              className="w-16 h-auto rounded-full aspect-square"
              style={{ color: 'transparent' }}
             />
            <div className="flex justify-start items-start flex-col">
              <p className="text-3xl md:text-[40px] leading-[100%] font-bold text-green font-work">
                Service Options & Customizable Menus
              </p>
              <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                We provide both off-site and on-site services, so you can choose the best option for your event's location and size. From Live Cooking With Private Chef Services to a delicious BBQ food option with On Spot Tandoor Service, we offer a variety of customizable menu options to enhance your event.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-5 lg:max-w-[410px]">
            <img
              alt="LIVE Counter Service"
              loading="lazy"
              width="3000"
              height="3000"
              decoding="async"
              data-nimg="1"
              className="w-16 h-auto rounded-full aspect-square"
              style={{ color: 'transparent' }}
             />
            <div className="flex justify-start items-start flex-col">
              <p className="text-3xl md:text-[40px] leading-[100%] font-bold text-green font-work">
                LIVE Counter Service
              </p>
              <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                Treat your guests to an unforgettable culinary experience with our LIVE Counters, featuring everything from chat to dosa. This unique and interactive option adds a delightful touch to any event, leaving a lasting impression on your guests. Also, our menu includes mouth-watering dishes from both North and South Indian cuisines, ensuring that there's something for everyone.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl md:text-[100px] lg:hidden block px-2 mb-5">our catering services</h1>
          <div className="pinned h-[1000px] sm:min-h-[890px] w-full lg:min-w-[600px] max-w-[740px] m-auto flex flex-col justify-start items-center text-black relative pointer-events-none">
            <img
              alt=""
              id="one"
              loading="lazy"
              width="3000"
              height="3000"
              decoding="async"
              data-nimg="1"
              className="one w-1/2 max-w-[290px] absolute z-20 scale-90 translate-x-10"
              style={{ color: 'transparent', translate: 'none', rotate: 'none', scale: 'none', bottom: '58.2141%', right: '25.8333%', maxWidth: '290px', transform: 'translate(40px, 0px) scale(0.9, 0.9)' }}
              />
            {/* Other images go here */}
            <img
              alt=""
              id="parti9"
              loading="lazy"
              width="3000"
              height="4000"
              decoding="async"
              data-nimg="1"
              className="absolute z-0 w-fit"
              style={{ color: 'transparent', bottom: '97.1%', right: '48.0833%' }}
             />
          </div>
        </div>
      </div>
      <Image
        alt="billing"
        fetchPriority="high"
        width={3000}
        height={1000}
        decoding="async"
        className="h-auto relative max-h-[980px] z-10 w-full rounded-[60px]"
        style={{ color: 'transparent' }}
        src={billing}
      />
      <div className="imageborder absolute bottom-0 my-auto md:bottom-[60px] w-full z-30 flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-[80px] text-white text-center">
          Wanna know more? <br />
          <span className="strokeWhite">Talk to us today</span>
        </h1>
           <a className="rounded-[60px]" href="/contact-us">
            <button className="bg-yellow uppercase px-10 py-5 rounded-full text-4xl md:text-[40px] text-white leading-6 md:leading-[40px] mt-5">
              contact us
            </button>
          </a>
      </div>

      {/* <footer className="w-[95%] m-auto rounded-t-[40px] bg-lightgreen p-10 md:p-[60px] flex flex-col lg:flex-row justify-between lg:items-center gap-10">
        <div className="max-w-fit">
          <img alt="logo" loading="lazy" width="265" height="265" decoding="async" src="/vayals.svg" />
          <h1 className="text-[40px] tracking-[2px] text-center">Vayal’s kitchen</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-20 md:gap-[100px]">
          <div className="flex gap-5 flex-col text-[50px] leading-[50px]">
            <a href="/about-us">About Us</a>
            <div className="text-yellow cursor-pointer">Order food</div>
            <a href="/menu">Our Menu</a>
            <a href="#catering">Catering</a>
          </div>
          <div className="underline underline-offset-4">
            <div className="flex flex-col gap-5 font-work font-semibold">
              <a target="_blank" type="email" href="mailto:vayalskitchen@gmail.com" className="flex flex-row gap-2">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" src="/Home/Footer/mail.svg" />
                <p className="text-xl">vayalskitchen@gmail.com</p>
              </a>
              <a target="_blank" type="tel" href="tel:+1(456)89058" className="flex flex-row gap-2">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" src="/Home/Footer/call.svg" />
                <p className="text-xl">+1 (456) 89058</p>
              </a>
              <a target="_blank" href="https://www.facebook.com/people/Vayals-Indian-Kitchen/100077552566092/?mibextid=ZbWKwL" className="flex flex-row gap-2">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" src="/Home/Footer/messenger.svg" />
                <p className="text-xl">@vayals_official</p>
              </a>
              <a target="_blank" href="https://www.instagram.com/vayalskitchen" className="flex flex-row gap-2">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" src="/Home/Footer/instagram.svg" />
                <p className="text-xl">@vayals_kitchen</p>
              </a>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=16025616505&amp;text&amp;type=phone_number&amp;app_absent=0" className="flex flex-row gap-2">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" src="/Home/Footer/whatsapp.svg" />
                <p className="text-xl">+1 (602) 561-6505</p>
              </a>
            </div>
            <a href="https://maps.app.goo.gl/eJDqKT7i3qHuhMHE9" target="_blank" className="flex flex-row gap-5 mt-5">
              <img alt="" loading="lazy" width="24" height="24" decoding="async" src="/Home/Footer/location.svg" />
              <p className="text-xl font-work font-semibold max-w-[170px]">507 w Thomas road Phoenix AZ 85013</p>
            </a>
          </div>
        </div>
      </footer> */}

         </main>
  );
}
