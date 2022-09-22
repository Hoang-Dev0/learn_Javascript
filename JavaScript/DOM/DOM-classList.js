// Classlist property

// add : thêm 1 class vào trong element node
// contains: kiểm tra trong element node có chứa class ko . return boolean
// remove: xóa 1 class trong element node
// toggle: if element node chưa có class thì add, ko thì remove

var boxElement = document.querySelector('.box')

setInterval(() => {
    boxElement.classList.toggle('.red')
} , 1000)