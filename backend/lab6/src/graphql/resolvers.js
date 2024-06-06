const Car = require("../schemas/car");
const CarStatus = require("../schemas/carStatus");

const resolvers = {
  getCars: async () => {
    try {
      return await Car.find();
    } catch (error) {
      throw new Error('Failed to fetch cars');
    }
  },
  getCarById: async ({ id }) => {
    try {
      return await Car.findById(id);
    } catch (error) {
      throw new Error('Failed to fetch car');
    }
  },
  getCarStatuses: async () => {
    try {
      return await CarStatus.find().populate('carId');
    } catch (error) {
      throw new Error('Failed to fetch car statuses');
    }
  },
  getCarStatusById: async ({ id }) => {
    try {
      return await CarStatus.findById(id).populate('carId');
    } catch (error) {
      throw new Error('Failed to fetch car status');
    }
  },
  addCar: async ({ input }) => {
    try {
      const car = new Car(input);
      await car.save();
      return car;
    } catch (error) {
      throw new Error('Failed to add car');
    }
  },
  updateCar: async ({ id, input }) => {
    try {
      const car = await Car.findByIdAndUpdate(id, input, { new: true });
      return car;
    } catch (error) {
      throw new Error('Failed to update car');
    }
  },
  deleteCar: async ({ id }) => {
    try {
      const deletedCar = await Car.findByIdAndDelete(id);
      return deletedCar;
    } catch (error) {
      throw new Error('Failed to delete car');
    }
  },
  addCarStatus: async ({ input }) => {
    try {
      const carStatus = new CarStatus(input);
      await carStatus.save();
      return carStatus;
    } catch (error) {
      throw new Error('Failed to add car status');
    }
  },
  updateCarStatus: async ({ id, input }) => {
    try {
      const carStatus = await CarStatus.findByIdAndUpdate(id, input, { new: true }).populate('carId');
      return carStatus;
    } catch (error) {
      throw new Error('Failed to update car status');
    }
  },
  deleteCarStatus: async ({ id }) => {
    try {
      const deletedCarStatus = await CarStatus.findByIdAndDelete(id).populate('carId');
      return deletedCarStatus;
    } catch (error) {
      throw new Error('Failed to delete car status');
    }
  },
};

module.exports = resolvers;
