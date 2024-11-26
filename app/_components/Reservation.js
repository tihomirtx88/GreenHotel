import {
  getBookedDatesByCabinId,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export default async function Reservation({apartment}) {

  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(apartment.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">

      <DateSelector settings={settings} bookedDates={bookedDates} apartment={apartment}/>
      <ReservationForm apartment={apartment}/>

    </div>

  );
}
