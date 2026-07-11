import { auth } from "../_lib/auth";
import {
  getBookedDatesByCabinId,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({apartment}) {

  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(apartment.id),
  ]);

  const session = await auth();

  return (
      <section
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        border
        border-primary-800
        rounded-xl
        overflow-hidden
        bg-primary-950
        shadow-lg
        min-h-[400px]
      "
    >
      <div className="border-b lg:border-b-0 lg:border-r border-primary-800">
        <DateSelector
          settings={settings}
          bookedDates={bookedDates}
          apartment={apartment}
        />
      </div>

      <div className="flex">
        {session?.user ? (
          <ReservationForm
            apartment={apartment}
            user={session.user}
          />
        ) : (
          <LoginMessage />
        )}
      </div>
    </section>

  );
}
