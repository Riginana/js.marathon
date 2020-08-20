function formattedPhone(phone) {

    for(let i = 0; i < phone.length; i++){


        console.log('+' + phone[1]+ ' '+ '(' + phone[2] +''+phone[3]+''+ phone[4] + ')'+ ' '+ phone[5]+''+phone[6]+''+phone[7]+'-'+phone[8]+''+phone[9]+'-'+''+phone[10]+''+phone[11])
    }
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90