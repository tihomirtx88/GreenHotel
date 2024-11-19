import ApartmentCard from "@/app/_components/ApartmentCard";

export const metadata = {
    title: "Apartmenst"
};

export default function Page(){
    const apartments = [];

    return (
      <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          Our Luxury apartments
        </h1>
        <p className="text-primary-200 text-lg mb-10">
          Cozy yet luxurious apartments, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending your
          days exploring the dark forests around, or just relaxing in your private
          hot tub under the stars. Enjoy natures beauty in your own little home
          away from home. The perfect spot for a peaceful, calm vacation. Welcome
          to paradise.
        </p>
  
        {apartments.length > 0 && (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {apartments.map((apartment) => (
              <ApartmentCard apartment={apartment} key={apartment.id} />
            ))}
          </div>
        )}
      </div>
    );
};