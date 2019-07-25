

$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const userTextElement = $(event.currentTarget).find('#shopping-list-entry');

        $(".shopping-list").append(
            `<li>
            <span class="shopping-item"> ${userTextElement.val()} </span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
            <span class="button-label">delete</span>
            </button>
            </div>
            </li>`
        )

        $(".shopping-item-delete").click(event => {
            console.log(event.currentTarget);
            $(event.currentTarget).parent().parent().remove();
        })

        $(".shopping-item-toggle").click(event =>{
            $(event.currentTarget).parent().siblings('.shopping-item').toggleClass("shopping-item__checked");
        })
    })


})

$(function() {
    $(".shopping-item-toggle").click(event => {
        $(event.currentTarget).parent().siblings('.shopping-item').toggleClass("shopping-item__checked");
    })
})

$(function() {
    $(".shopping-item-delete").click(event => {
        console.log(event.currentTarget)
        $(event.currentTarget).parent().parent().remove()
    })
})
