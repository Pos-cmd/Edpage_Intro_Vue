import { defineStore } from 'pinia'
import axios from 'axios'

export const useScheduleStore = defineStore('scheduleStore', {
  state: () => ({
    schedule: [],
    isLoading: false,
    subscribeTo: []
  }),
  getters: {
    /**
     * Retourne les données du calendrier.
     * @returns {Array} Les données du calendrier sous forme d'un tableau.
     */
    scheduleData () {
      return Object.entries(this.schedule)
    },
    /**
     * Calcule le prix total des événements auxquels l'utilisateur s'est abonné.
     * @param {ScheduleStoreState} state - L'état du store.
     * @returns {number} Le prix total des événements auxquels l'utilisateur s'est abonné.
     */
    totalPrice: (state) => {
      return Object.entries(state.subscribeTo).reduce((total, course) => {
        const totalPrice = total + course[1].price
        return totalPrice
      }, 0)
    }
  },
  actions: {
    /**
     * Récupère les données du calendrier depuis un serveur distant.
     * @returns {Promise<void>} Une promesse qui se résout lorsque les données sont récupérées.
     */
    async getSchedule () {
      this.isLoading = true

      try {
        const res = await axios.get(
          'https://my-json-server.typicode.com/Pos-cmd/schedule/Schedule'
        )
        this.schedule = await res.data
      } catch (error) {
        alert(error)
      }

      this.isLoading = false
    },
    /**
     * Gère l'abonnement ou la désinscription de l'utilisateur à un événement.
     * @param {Event} event - L'événement à gérer.
     * @returns {void}
     */
    subscribe: function (event) {
      const isDateHaveEvent = this.subscribeTo.find(
        (obj) => obj.date === event.date && obj.time === event.time
      )
      const isObjExists = this.subscribeTo.some((obj) => obj.id === event.id)

      if (isObjExists) {
        this.subscribeTo = this.subscribeTo.filter(
          (obj) => obj.id !== event.id
        )
      } else {
        if (isDateHaveEvent) {
          const sb = this.subscribeTo.find(
            (obj) => obj.date === event.date && obj.time === event.time
          )
          this.subscribeTo = this.subscribeTo.filter((obj) => obj.id !== sb.id)
        }
        this.subscribeTo.push(event)
      }
    },
    /**
     * Formate un prix en dollars américains.
     * @param {number} price - Le prix à formater.
     * @returns {string} Le prix formaté en dollars américains.
     */
    formatPrice: function (price) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    }
  }
})
