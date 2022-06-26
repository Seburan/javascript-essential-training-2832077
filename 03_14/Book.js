class Book {
  constructor(formatSize, pageNumber, hardCover) {
    this.formatSize = formatSize;
    this.pageNumber = pageNumber;
    this.hardCover = hardCover;
    this.condition = "New";
  }

  updateCondition(condition) {
    this.condition = condition;
  }
}

export default Book;
