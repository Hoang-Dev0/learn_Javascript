/**
 * -promise là khái niệm sỉnh ra để xử lí các thao tác bất đồng bộ
 * - trước khi có promise sẽ thường sử dụng callback , sd callback sẽ xảy ra một vấn đề đó là callback hell -> Sinh ra promise trong phiên bản JS mới hơn trong ES6 
 * - giúp dễ đọc dễ hiểu hơn
 * 
    - promise có 3 trạng thái: 
        + pendding : trạng thái chờ
        + fulfilled : trạng thái thành công
        + reject 

    - 3 cách viết gọn: 
        + promise.resolve  :sẽ return lại 1 promise vì thế có thể .then .catch các thứ
        + promise.reject :sẽ return lại 1 promise vì thế có thể .then .catch các thứ
        + promise.all : chạy song song promise (sẽ return lại 1 promise vì thế có thể .then .catch các thứ)

 * 
 */

/***********************************************************************/
// vd 1
// var promise = new Promise(
//   // Executor
//   function (resolve, reject) {
//     // logic
//     // Thành công: resolve()
//     // Thất bại: reject()

//     // resolve('thanh cong');
//     resolve([
//       {
//         id: 1,
//         course: "JavaScript",
//       },

//       {
//         id: 2,
//         course: "PHP",
//       },
//     ]);
//     // reject();
//   }
// );

// promise
//   .then(function () {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function(){
//           resolve([1,2,3])
//       }, 3000);
//     });
//   })
//   .then(function (course) {
//     console.log(course);
//   })
//   .catch(function () {
//     console.log("failure");
//   })
//   .finally(function () {
//     console.log("Done");
//   });

/***********************************************************************/
// vd 2:

// function sleep(ms) {
//     return new Promise(
//         function(resolve) {
//             setTimeout(resolve, ms);
//         }
//     )
// }

// sleep(3000)
//     .then(function(){
//         console.log(1);
//         return sleep(3000)
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(3000);
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000)
//     })
//     .then(function(){
//         console.log(4)
//     })

/***********************************************************************/
// vd 3:
// var promise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve([1]);
//   }, 1000);
// });

// var promise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     // resolve([2, 3, 4]);
//     reject('co loi');
//   }, 2000);
// });

// Promise.all([promise1, promise2])
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (result) {
//     console.log(result)
//   });

/***********************************************************************/
//  Example khó chúa:
// 1. lấy comments
// 2. từ comment lấy ra user_id
// 3. từ user_id lấy ra user tương ứng
var users = [
  {
    id: 1,
    name: "Phúc Hoàng",
  },
  {
    id: 2,
    name: "Phúc Huy",
  },
  {
    id: 3,
    name: "Quốc Trường",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Khi nào bạn giàu",
  },
  {
    id: 2,
    user_id: 2,
    content: "Tôi cũng không biết nữa",
  },
  {
    id: 3,
    user_id: 1,
    content: "Cảm ơn anh <3",
  },
];
// Fake API
function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
    // setTimeout(resolve(comments),1000)
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id); // include dùng cho array or string
      });
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds) // => truyền vào 1 array or string
      .then(function (users) {
        return {
          users: users,
          comments: comments,
        };
      });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });

// getUsersByIds([1, 2]) // => truyền vào 1 array or string
//   .then(function (users) {
//     console.log(users);
//   });

