# countdown jquery plugin #

I needed a page countdown script to so super sweet stuff after a few minutes. So I whipped this bad boy up real quick.
It's stupid easy to use:

    $("#powpow").countdown(30, function() { alert('whammy'); });

Where, #powpow is the element(s) where you want the countdown to appear (it outputs as min:sec)
All you do is supply how many seconds and a callback.

You can have more than one countdown on a page. See example.html where I have 2 countdowns, and I spread one countdown across multiple divs at once.
