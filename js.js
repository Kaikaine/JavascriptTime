function time(hour, minute, period) {



    if(minute>=30 && period == 'AM') {
        console.log("Its almost " + (hour + 1) + " in the morning");
    }

    else if(minute>=30 && period == 'PM') {
        console.log("Its almost " + (hour + 1) + " in the evening");
    }

    else if(minute<30 && period == 'AM') {
        console.log("It's just after " + hour + " in the morning");
    }

    else if(minute<30 && period == 'PM') {
        console.log("It's just after " + hour + " in the evening");
    }
}

time(3, 45, 'PM');