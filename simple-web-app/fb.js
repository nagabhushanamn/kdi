


// 

$(document).ready(function () {

    let storyList = [];

    let apiUrl = 'http://0.0.0.0:3000/api/stories';
    $.ajax(apiUrl, {
        method: 'GET',
        success: function (resp) {
            storyList = resp;
            applyBinding();
        }
    });


    let $storyList = $('#story-list')

    function applyBinding() {
        $storyList.children().remove();
        let all = [];
        storyList.reverse().forEach(story => {
            let storyTemplate = `
            <div class="list-group-item">
                <div class="alert alert-info">
                    &mdash; <span class="badge">${story.name}</span>
                    <hr/>
                    <p>${story.message}</p>
                </div>
            </div>
            `
            all.push(storyTemplate);
        });
        $storyList.html(all.join(' '));
    }

    applyBinding();


    var $form = $('#story-form');
    $form.submit(function (event) {

        event.preventDefault();

        let $nameField = $('#name', $form);
        let $messageField = $('#message', $form);

        let name = $nameField.val();
        let message = $messageField.val();

        // validation
        //-------------------------------------
        var $div = $nameField.closest('div');
        if (!name) {
            $div.addClass('has-error');
            return;
        } else {
            $div.removeClass('has-error');
        }
        //-------------------------------------

        let newStory = { name, message };


        $.ajax(apiUrl, {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newStory),
            success: function (resp) {
                storyList.push(resp);
                applyBinding();
            }
        });


        $nameField.val('');
        $messageField.val('');

    });

});