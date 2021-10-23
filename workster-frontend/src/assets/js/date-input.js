$('.js-text-date-toggle').on('focus', function() {
    $(this).attr('type', 'date') }
).on('blur', function() {
    $(this).attr('type', 'text') }
)