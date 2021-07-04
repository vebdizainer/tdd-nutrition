export default class EmptyFoodNameError extends Error {
  constructor(message = "Empty foodname is not allowed!") {
    super(message);
  }
}
