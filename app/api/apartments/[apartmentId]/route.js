import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, {
    params
}){
    const { apartmentId } = params;

    try {
        const [aparment, bookedDates] = await Promise.all(
            [getCabin(apartmentId)],
            [getBookedDatesByCabinId(apartmentId)]
        );

        return Response.json({aparment, bookedDates});

    } catch (error) {
        return Response.json({message: 'Apartment not found'});
    }
    
}

// export async function POST(){}