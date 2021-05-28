$(document).ready(function () {
    $(".select2_el").select2({
    });
    $(".chat-bot-icon").click(function (e) {
        $(this).children('img').toggleClass('hide');
        $(this).children('svg').toggleClass('animate');
        $('.chat-screen').toggleClass('show-chat');
    });
    $('.chat-mail button').click(function () {
        checkValidations()
        if(!nameError && !emailError && !reportError){
            $('.chat-mail').addClass('hide');
            $('.chat-body').removeClass('hide');
            $('.chat-input').removeClass('hide');
            $('.chat-header-option').removeClass('hide');
            morningChat();
        }
    });
    $('.end-chat').click(function () {
        $('.chat-body').addClass('hide');
        $('.chat-input').addClass('hide');
        $('.chat-session-end').removeClass('hide');
        $('.chat-header-option').addClass('hide');
    });
});

// Start Chat Bot Functionalities
function date(){
    let weekDay = ['Sunday', 'Monday', 'Tueday', 'Wedday', 'Thuday', 'Friday', 'Satday'];
    const date = new Date();

    const day = weekDay[date.getDay()]; // return Friday
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }); // return 11:24 AM

    $('.date').text(day + ', ' + time);
}
date()

$('.rate-bubble').click(function(){
    alert('Thank you for contact us & sending you data')
    window.location.reload();
});

let nameError = true;
let emailError = true;
let reportError = true;
function checkValidations() {
    if($('.name').val().trim().length > 0){
        nameError = false;
        $('.name').removeClass('error')
    }else{
        nameError = true
        $('.name').addClass('error')
    }

    if($('.email').val().trim().length > 0){
        emailError = false;
        $('.email').removeClass('error')
    }else{
        emailError = true
        $('.email').addClass('error')
    }

    if($('.report').val().trim().length > 0){
        reportError = false;
        $('.select2-selection__rendered').removeClass('error')
        $('#problemMensioned').text($('.report').val());
    }
    else{
        reportError = true
        $('.select2-selection__rendered').addClass('error')
    }
}

// CHAT START

function morningChat() {
    showTyping();
    setTimeout(function(){
        $('.morning').removeClass('hide-chat');
        hideTyping();
        problemMensionedChat();
        scroll(100);
    }, 1500);
}
function problemMensionedChat() {
    showTyping();
    setTimeout(function(){
        $('.problem-mensioned').removeClass('hide-chat');
        hideTyping();
        problemFacedChat();
        scroll(100);
    }, 1500);
}
function problemFacedChat() {
    showTyping();
    setTimeout(function(){
        $('.problem-faced').removeClass('hide-chat');
        hideTyping();
        repliedInput.attr('disabled', false);
        scroll(100);
    }, 1500);
}

const repliedInput = $('.replied-input');
const repliedInputBtn = $('.replied-input-btn');
repliedInput.attr('disabled', true);

function repliedProblemChat(){
    if (repliedInput.val().trim().length > 0) {
        if (event.key == 'Enter' || event.type == 'click') {
            
            repliedInput.attr('disabled', true);
            repliedInput.val('');
            repliedInputBtn.addClass('disable-a-tag'); // prevent or disable the a tag
            
            showTyping();
            setTimeout(function(){
                $('.replied-problem').removeClass('hide-chat');
                hideTyping();
                thankYouChat();
                scroll(100);
            }, 1500);
        }
    }
}

function thankYouChat() {
    showTyping();
    setTimeout(function(){
        $('.thank-you').removeClass('hide-chat');
        hideTyping();
        scroll(100);
    }, 1500);
}

// CHAT END

function hideTyping() {
    $('.typing').addClass('hide-chat');
}
function showTyping() {
    $('.typing').removeClass('hide-chat');
}

const chatBody = document.querySelector('.chat-body');
function scroll(scrollValue) {
    chatBody.scrollTop += scrollValue;
}