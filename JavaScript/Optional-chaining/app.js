// Operator( toán tử ): optional chaining . Kí hiệu: ?.
//  vị trí sẽ đứng trước key cần kiểm tra. Nếu key đó null or underfine thì sẽ return lại underfine

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
    // cat2: {
    //   name: "Dianah 2",
    //   cat3: {
    //     name: "Dianah 3",
    //   },
    // },
  },
};

const dogName = adventurer.cat?.cat2?.name;
console.log(dogName);
