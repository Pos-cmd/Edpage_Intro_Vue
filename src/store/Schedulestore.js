import {defineStore} from "pinia";
import axios from "axios";

export const useScheduleStore = defineStore('scheduleStore', {
    state: () =>({
        schedule: [],
        isLoading: false,
        subscribeTo: []
    }),
    getters: {
        scheduleData(){
           return Object.entries(this.schedule);
        },
        totalPrice: (state) => {
            return Object.entries(state.subscribeTo).reduce((total, course) => {
               const totalPrice = total + course[1].price
               return totalPrice
            }, 0);
        }
    },
    actions: {
        async getSchedule(){
            this.isLoading = true;
            const res = await axios.get('https://my-json-server.typicode.com/Pos-cmd/schedule/Schedule');
            this.schedule = res.data;
            this.isLoading = false;
        },
        subscribe : function (event) {

            const isDateHaveEvent = this.subscribeTo.find(obj => obj.date === event.date && obj.time === event.time)
            const isObjExists = this.subscribeTo.some(obj => obj.id === event.id);

            if (isObjExists) {
                this.subscribeTo = this.subscribeTo.filter(obj => obj.id !== event.id)
            }
            else {
                if(isDateHaveEvent){
                    const sb = this.subscribeTo.find(obj => obj.date === event.date && obj.time === event.time)
                    this.subscribeTo = this.subscribeTo.filter(obj => obj.id !== sb.id)
                }
                this.subscribeTo.push(event)
            }
        },
        formatPrice: function (price){
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(price);
        }
    }
})