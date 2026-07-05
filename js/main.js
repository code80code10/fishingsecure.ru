$(document).ready(function () {
    $(".back_icon").click(function () {
        $("#first").css("display", "none");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "auto");
    });

    $(".first_list").click(function () {
        $("#first").css("display", "block");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "hidden");
    });
    $(".back_icon").click(function () {
        $("#second").css("display", "none");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "auto");
    });

    $(".second_list").click(function () {
        $("#second").css("display", "block");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "hidden");
    });
    $(".back_icon").click(function () {
        $("#third").css("display", "none");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "auto");
    });

    $(".third_list").click(function () {
        $("#third").css("display", "block");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "hidden");
    });
    $(".back_icon").click(function () {
        $("#fourth").css("display", "none");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "auto");
    });

    $(".fouth_list").click(function () {
        $("#fourth").css("display", "block");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "hidden");
    });
    $(".back_icon").click(function () {
        $("#fifth").css("display", "none");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "auto");
    });

    $(".fifth_list").click(function () {
        $("#fifth").css("display", "block");
        $('body').css("height", $(window).height());
        $('body').css("overflow", "hidden");
    });
    $(".monitor-button").click(function () {
        $("#window").css("display", "none")
    })
    $(".test-back").click(function () {
        $("#test-quiz").css("display", "none")
    })
    $(".fifth-monitor").click(function () {
        $("#test-quiz").css("display", "block")
    })
});
const questions = [
    {
        text: "Вам пришло письмо от «администрации школы» с темой: «Обязательное подтверждение данных для отчёта Минобрнауки». В письме кнопка: «Подтвердить данные». Что делать?",
        type: "single",
        options: [
            "Нажать кнопку — вдруг это влияет на аттестат?",
            "Игнорировать, школа не имеет права собирать данные через email",
            "Проверить, от какого именно email пришло письмо, и уточнить у классного руководителя лично",
            "Переслать письмо родителям"
        ],
        correct: [2]
    },
    {
        text: "В письме от «Сбербанка» ссылка ведёт на <code>https://sberbank-secure.ru</code>. Сайт выглядит как настоящий, есть замок (🔒) в адресной строке. Это безопасно?",
        type: "single",
        options: [
            "Да, потому что есть замок и дизайн как у Сбербанка",
            "Нет, настоящий сайт — только <code>sberbank.ru</code>, а не <code>sberbank-secure.ru</code>",
            "Да, если я не ввожу данные карты",
            "Нет, потому что в домене нет слова «official»"
        ],
        correct: [1]
    },
    {
        text: "Вам прислали SMS: «Ваш заказ на Ozon ожидает оплату. Перейдите: <code>https://oz0n-payment.ru</code>». В домене — ноль вместо «о». Это случайность?",
        type: "single",
        options: [
            "Да, опечатка в рекламе — бывает",
            "Нет, это типичный приём фишинга — замена букв на похожие символы",
            "Да, если сайт открывается",
            "Нет, потому что Ozon не присылает SMS"
        ],
        correct: [1]
    },
    {
        text: "В письме от «Госуслуг» встроенная форма для ввода логина и пароля. Нет внешних ссылок. Это безопасно?",
        type: "single",
        options: [
            "Да, потому что форма внутри письма — данные уйдут только получателю",
            "Нет, данные из любой формы в email уходят на сервер, указанный отправителем (мошеннику)",
            "Да, если письмо пришло на почту от школы",
            "Нет, потому что Госуслуги не используют email вообще"
        ],
        correct: [1]
    },
    {
        text: "Вам пишет «друг» в Telegram: «Привет! Не могу войти в аккаунт. Скинь, пожалуйста, код из SMS, который пришлют на твой номер». Что делать?",
        type: "single",
        options: [
            "Скинуть код — друг в беде!",
            "Позвонить ему по телефону, чтобы убедиться, что это он",
            "Написать: «Какой код?» — и посмотреть реакцию",
            "Игнорировать — все просят коды"
        ],
        correct: [1]
    },
    {
        text: "Файл во вложении называется <code>«Договор_займа.pdf»</code>, но при наведении курсора внизу браузера отображается <code>«Договор_займа.pdf.exe»</code>. Что это значит?",
        type: "single",
        options: [
            "Это баг почтового клиента — можно игнорировать",
            "Это вирус: настоящие PDF-файлы не имеют расширения <code>.exe</code>",
            "Это зашифрованный PDF — нужно ввести пароль",
            "Это нормально — все документы сейчас в формате .exe"
        ],
        correct: [1]
    },
    {
        text: "Вы открыли фишинговый сайт, но не вводили никаких данных. Нужно ли что-то делать?",
        type: "single",
        options: [
            "Нет — если ничего не вводил, всё в порядке",
            "Да, стоит проверить устройство антивирусом и сменить пароли, если заходил в аккаунты",
            "Нет, современные сайты не могут навредить без взаимодействия",
            "Да, но только если у вас Windows"
        ],
        correct: [1]
    },
    {
        text: "Звонят: «Здравствуйте, это служба безопасности Apple. Ваш аккаунт взломан. Назовите код из SMS для защиты». Что делать?",
        type: "single",
        options: [
            "Назвать код — Apple же заботится о безопасности!",
            "Положить трубку и перезвонить в официальную поддержку Apple по номеру с их сайта",
            "Спросить у звонящего серийный номер моего iPhone",
            "Отправить код в iMessage"
        ],
        correct: [1]
    },
    {
        text: "В соцсетях вам пишут: «Поздравляем! Вы выиграли AirPods! Оставьте номер телефона и адрес доставки». Это безопасно?",
        type: "single",
        options: [
            "Да, если страница выглядит как официальная",
            "Нет, настоящие розыгрыши никогда не просят личные данные в личных сообщениях",
            "Да, если уже много комментариев под постом",
            "Нет, потому что AirPods не разыгрывают"
        ],
        correct: [1]
    },
    {
        text: "Что делать, если вы уже ввели пароль на фишинговом сайте?",
        type: "multiple",
        options: [
            "Сразу сменить пароль от этого аккаунта",
            "Включить двухфакторную аутентификацию (2FA)",
            "Проверить, не использовали ли этот пароль на других сайтах — и сменить везде",
            "Удалить историю браузера"
        ],
        correct: [0, 1, 2]
    }
];
let userAnswers = new Array(questions.length).fill(null);
let currentScreen = 0;

function renderQuiz() {
    const container = $('#quiz-container');
    container.empty();

    questions.forEach((q, index) => {
        let screen = $(`<div class="screen" data-index="${index}"><h2>Вопрос ${index + 1} из ${questions.length}</h2><div class="question-text">${q.text}</div></div>`);
        let optionsDiv = $('<div class="options"></div>');

        q.options.forEach((opt, i) => {
            let id = `q${index}_opt${i}`;
            let input = q.type === 'single'
                ? `<input type="radio" name="q${index}" id="${id}" value="${i}">`
                : `<input type="checkbox" id="${id}" value="${i}">`;
            let label = $(`<label class="option">${input}${opt}</label>`);
            optionsDiv.append(label);
        });

        screen.append(optionsDiv);

        let nav = $('<div class="nav-buttons"></div>');
        if (index > 0) {
            nav.append(`<button class="btn-prev">Назад</button>`);
        }
        if (index < questions.length - 1) {
            nav.append(`<button class="btn-next">Далее</button>`);
        } else {
            nav.append(`<button class="btn-finish">Завершить тест</button>`);
        }

        screen.append(nav);
        container.append(screen);
    });
}

function updateAnswer(screenIndex) {
    const screen = $(`.screen[data-index="${screenIndex}"]`);
    if (questions[screenIndex].type === 'single') {
        let selected = screen.find(`input[name="q${screenIndex}"]:checked`).val();
        userAnswers[screenIndex] = selected !== undefined ? [parseInt(selected)] : null;
    } else {
        let selected = screen.find(`input:checked`).map(function () {
            return parseInt($(this).val());
        }).get();
        userAnswers[screenIndex] = selected.length > 0 ? selected : null;
    }
}

function showScreen(index) {
    $('.screen').removeClass('active');
    if (index === -1) {
        $('#start-screen').addClass('active');
    } else if (index === 'result') {
        $('#result-screen').addClass('active');
    } else {
        $(`.screen[data-index="${index}"]`).addClass('active');
        currentScreen = index;
    }
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function calculateScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const correct = questions[i].correct;
        const user = userAnswers[i] || [];
        if (arraysEqual(correct.sort(), user.sort())) {
            score++;
        }
    }
    return score;
}

function showResult() {
    const score = calculateScore();
    const messageDiv = $('#result-message');
    let message, className;

    if (score === questions.length) {
        message = ` Отлично! Ты набрал ${score} из ${questions.length}!<br>Тебе не грозят интернет-угрозы!`;
        className = 'high';
    } else if (score >= 7) {
        message = ` Ты набрал ${score} из ${questions.length}.<br>Хороший уровень осознанности! Но будь внимательнее.`;
        className = 'medium';
    } else {
        message = ` Ты набрал ${score} из ${questions.length}.<br>Повтори материал — безопасность начинается с внимания!`;
        className = 'low';
    }

    messageDiv.html(message).removeClass('high medium low').addClass(className);
    showScreen('result');
}
$(document).ready(function () {
    renderQuiz();

    $('#start-btn').on('click', () => showScreen(0));

    $(document).on('click', '.btn-prev', () => {
        updateAnswer(currentScreen);
        showScreen(currentScreen - 1);
    });

    $(document).on('click', '.btn-next, .btn-finish', () => {
        updateAnswer(currentScreen);
        if ($(event.target).hasClass('btn-finish')) {
            showResult();
        } else {
            showScreen(currentScreen + 1);
        }
    });

    $('#restart-btn').on('click', () => {
        userAnswers = new Array(questions.length).fill(null);
        currentScreen = 0;
        $('.screen input').prop('checked', false);
        showScreen(-1);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});