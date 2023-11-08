// class Noded {
//   public val: number;
//   public next: Noded | null | any;

//   constructor(val: number) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkList {
//   public head: null | any | Noded;
//   public tail: null | any | Noded;
//   public length: number;

//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   addTail(val: number) {
//     let node = new Noded(val);
//     if (!this.head) {
//       this.head = node;
//       this.tail = this.head;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.length++;
//     return this;
//   }

//   addHead(val: number) {
//     let node = new Noded(val);

//     if (!this.head) {
//       this.head = node;
//       this.tail = null;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.length++;
//     return this;
//   }

//   removeTail() {
//     if (!this.head) {
//       return undefined;
//     } else {
//       let current = this.tail;
//       let newTail = current;
//       while (current.next) {
//         this.tail = newTail;
//         this.tail.next = newTail;
//       }
//       this.length--;
//       return current;
//     }
//   }

//   removeHead() {
//     if (!this.head) {
//       return undefined;
//     } else {
//       let current = this.head;
//       let newHead = current;

//       while (current.next) {
//         this.head = newHead;
//         this.head.next = null;
//       }
//       this.length--;
//       return current;
//     }
//   }

//   get(index: number) {
//     if (index < 0 || index >= this.length) {
//       return "Out of range";
//     } else {
//       let loop: number = 0;
//       let current = this.head;

//       while (loop !== index) {
//         current = current.next;
//         loop++;
//       }
//       return current;
//     }
//   }

//   set(index: number, val: number) {
//     let node = this.get(index);

//     if (node) {
//       node.val = val;
//       return true;
//     } else {
//       return false;
//     }
//   }

//   insert(index: number, val: number) {
//     let node = this.get(index);
//     if (index < 0 || index >= this.length) return "Out of range";
//     if (index === 0) return !!this.addHead(val);
//     if (index === 0) return !!this.addTail(val);

//     let prev = this.get(index - 1);
//     let temp = prev.next;

//     prev.next = node;
//     node.next = temp;
//     this.length++;
//     return true;
//   }
//   remove(index: number) {
//     let node = this.get(index);
//     if (index < 0 || index >= this.length) return "Out of range";
//     if (index === 0) return !!this.removeHead();
//     if (index === 0) return !!this.removeTail();

//     let prev = this.get(index - 1);
//     let temp = prev.next;

//     prev.next = temp.next;
//     this.length++;
//     return true;
//   }
// }

// let linkList = new LinkList();
// linkList.addTail(3);
// linkList.addTail(39);
// linkList.addTail(13);
// linkList.addTail(2);
// // linkList.addHead(41);
// // linkList.removeTail();
// // linkList.removeHead();
// // linkList.get(3);
// console.log("e", linkList.get(0));
// // console.log("e", linkList.insert(0, 300));
// console.log("e", linkList.remove(0));
// console.log(linkList);

class Noded {
  public val: number;
  public next: Noded | null | any;

  constructor(val: number) {
    this.val = val;
  }
}

class LinkList {
  public head: Noded | null | any;
  public tail: Noded | null | any;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addTail(val: number) {
    let node = new Noded(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  addHead(val: number) {
    let node = new Noded(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  removeTail() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;

      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.length--;
      return this;
    }
  }

  removeHead() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      this.head = current.next;

      this.length--;
      return this;
    }
  }

  get(index: number) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      let count: number = 0;
      let current = this.head;

      while (index !== count) {
        current = current.next;
        count++;
      }
      return current;
    }
  }

  set(index: number, val: number) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index: number, val: number) {
    let node = new Noded(val);
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.addHead(val);
    if (index === this.length) return !!this.addTail(val);

    let prev = this.get(index - 1);
    let temp = prev.next;

    prev.next = node;
    node.next = temp;

    this.length++;
    return true;
  }
  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.removeHead();
    if (index === this.length) return !!this.removeTail();

    let prev = this.get(index - 1);
    let temp = prev.next;

    prev.next = temp.next;

    this.length--;
    return true;
  }
}

let linkList = new LinkList();

linkList.addHead(800);
linkList.addTail(2);
linkList.addTail(4);
linkList.addTail(6);
linkList.addTail(8);
console.log("index: ", linkList.set(1, 400));
console.log("index: ", linkList.get(1));
console.log("index: ", linkList.insert(1, 67));
console.log("index: ", linkList.remove(1));

// console.log("remove: ", linkList.removeTail());

console.log(linkList);
