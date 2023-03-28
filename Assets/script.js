
$(function () {

  // button function to save the text within the text box
  $('.saveBtn').on('click', function () {
    const $this = $(this);
    const val = $this.siblings('textarea').eq(0).val();
    const id = $this.parent().attr('id');

    localStorage.setItem(id, val);

    console.log(val);
  });

  // labeling dayjs a while also pulling the specific hour to match id
  const today = dayjs();
  const currentHour = parseInt(today.format('H'));
  console.log(currentHour);

// match the id to determine if the current hour is past, present, or future
  $('.time-block').each(function () {
    const timeBlock = $(this);
    const hour = parseInt(timeBlock.attr('id').split('-').pop());

    // present
    if (hour === currentHour) {
      timeBlock.addClass('present')
      // past

    } else if (hour < currentHour) {
      timeBlock.addClass('past')

      // future
    } else {
      timeBlock.addClass('future')

    };
  });

  // pulls from local storage when page refreshes
  $('.time-block').each(function () {
    const $this = $(this);
    const id = $this.attr('id');
    const val = localStorage.getItem(id)

    $this.children('textarea').eq(0).val(val)
  });

  // put the current day on the front of the page
  const currentDay = $('#currentDay');
  const time = dayjs();
  currentDay.text(time.format('dddd, MMMM D'));

});
