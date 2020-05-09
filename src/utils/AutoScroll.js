export function AutoScrollList(id) {
  const listBox = document.getElementById(id)
  let intervalScroll
  let setTime1
  let setTime2

  //   stopScroll()

  function startScroll() { // 开始滚动
    stopScroll()
    if (listBox.offsetHeight < listBox.scrollHeight) {
      intervalScroll = setInterval(function() {
        if ((listBox.scrollTop + listBox.offsetHeight) < listBox.scrollHeight) {
          listBox.scrollTop++
        } else {
          clearInterval(intervalScroll)
          setTime1 = setTimeout(function() {
            // $(listBox).animate({scrollTop: 0}, 'fast');
            listBox.scrollTop = 0
          }, 2000)
          setTime2 = setTimeout(startScroll, 4000)
        }
      }, 30)
    }
  }

  function stopScroll() { // 停止滚动
    clearInterval(intervalScroll)
    clearTimeout(setTime1)
    clearTimeout(setTime2)
  }
  listBox ? listBox.addEventListener('mouseover', function() {
    stopScroll()
  }) : ''

  listBox ? listBox.addEventListener('mouseout', function() {
    startScroll()
  }) : ''

  listBox ? startScroll() : ''
}
