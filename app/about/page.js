import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import { getCabins } from "../_lib/data-service";
// import image2 from "@/public/about-2.jpg";

export const revalidate = 86400;

export const metadata = {
  title: "About Page",
};

export default async function Page() {
  const apartments = await getCabins();

  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-5
        gap-y-16
        lg:gap-y-32
        gap-x-8
        lg:gap-x-24
        items-center
        text-base
        lg:text-lg
        px-4
        sm:px-6
      "
    >
      {/* -------- Section 1 -------- */}

      <div className="lg:col-span-3 order-2 lg:order-1">
        <h1 className="text-3xl md:text-4xl font-medium text-accent-400 mb-8">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-6 text-primary-200 leading-8">
          <p>
            Where natures beauty and comfortable living blend seamlessly. Hidden
            away in the heart of the Italian Dolomites, this is your paradise
            away from home. But it’s not just about the luxury cabins. It’s
            about reconnecting with nature and enjoying unforgettable moments
            with family and friends.
          </p>

          <p>
            Our{" "}
            <span className="font-semibold text-accent-400">
              {apartments.length}
            </span>{" "}
            luxury apartments provide a cozy base, while the surrounding
            mountains, forests and lakes create an unforgettable holiday
            experience.
          </p>

          <p>
            Wake up with breathtaking mountain views, explore beautiful hiking
            trails, relax in a private hot tub under the stars and experience
            the peace that only nature can offer.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 order-1 lg:order-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of apartment"
          placeholder="blur"
          className="rounded-2xl w-full h-auto shadow-xl"
        />
      </div>

      {/* -------- Section 2 -------- */}

      <div
        className="
          lg:col-span-2
          relative
          aspect-square
          w-full
          max-w-lg
          mx-auto
          order-3
        "
      >
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover rounded-2xl shadow-xl"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="lg:col-span-3 order-4">
        <h1 className="text-3xl md:text-4xl font-medium text-accent-400 mb-8">
          Managed by our family since 1962
        </h1>

        <div className="space-y-6 text-primary-200 leading-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family retreat.
            Started by our grandparents, this place has been lovingly cared for
            through generations.
          </p>

          <p>
            Weve preserved the peaceful atmosphere while continuously improving
            the comfort of every apartment. Here, you are not simply a guest —
            you become part of our extended family.
          </p>

          <p>
            Join us and experience authentic hospitality surrounded by the
            breathtaking beauty of the Italian Dolomites.
          </p>

          <div className="pt-2">
            <a
              href="/apartments"
              className="
                inline-flex
                items-center
                rounded-md
                bg-accent-500
                hover:bg-accent-600
                transition-all
                duration-300
                px-6
                sm:px-8
                py-4
                text-base
                sm:text-lg
                font-semibold
                text-primary-900
              "
            >
              Explore our luxury apartments →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
