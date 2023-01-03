import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedbull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1]  md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Welcome to our fitness website! We are dedicated to helping you
              achieve your health and wellness goals. Our expert trainers and
              state-of-the-art equipment are here to support you. Discover a
              wide range of workouts and training options to suit your needs.
              Start your journey towards a healthier you today!
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8 ">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* IMAGE */}
        <div>
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </div>

      {/* SPONSORS */}
      {isAboveMediumScreens ? (
        <div>
          <div>
            <div>
              <img src={SponsorRedbull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="redbull-forbes" />
              <img src={SponsorFortune} alt="redbull-fortune" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default home;