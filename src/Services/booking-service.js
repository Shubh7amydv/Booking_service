const {BookingRepository}= require('../Repository/index');
const axios=require('axios');
const { FLIGHT_SERVICE_PATH }=require('../config/serverconfig');
const serviceError = require('../utils/errors/service-error');


class BookingService {

    constructor(){
        this.bookingRepository=new BookingRepository();
    }
    async createBooking(data){
       try {
        
        const flightId= data.flightId
        const getflightRequestUrl=`${FLIGHT_SERVICE_PATH}/api/v1/flight/${flightId}`;

        const response=await axios.get(getflightRequestUrl);

        const flightData=response.data.data; 
        const priceOfFlight=flightData.price;


        if(data.noOfSeats>flightData.totalSeats){
            throw new serviceError (
                'something went wrong in booking process',
                'insufficients seats in the flight'
            )

            // console.log("not sufficient seats avaiable");
            // return 0;
        }

        const totalCost=priceOfFlight * data.noOfSeats;
        const bookingPayload={...data, totalCost};
        const booking= await this.bookingRepository.create(bookingPayload);
       





       } catch (error) {
            // throw new serviceError();
            console.log("something went wrong at service layer");
            throw error;

       }
    }
}

module.exports=BookingService;