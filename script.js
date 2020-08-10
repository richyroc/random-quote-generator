const quote = document.querySelector('.quote');
const random = document.querySelector('.random');
const arr = ['"Have no fear of perfection -- you’ll never reach it." -- Salvador Dali',


'“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.” – Milton Glaser ',


'“Good design’s not about what medium you’re working in. It’s about thinking hard about what you want to do and what you have to work with before you start.” – Susan Kare ',

'“You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design.” – Stefan Sagmeister ',

'“If no one hates it, no one really loves it.” – Jessica Walsh',

'“I’ve never had a problem with a dumb client. There is no such thing as a bad client. Part of our job is to do good work and get the client to accept it.” – Bob Gill ',

'“It’s through mistakes that you actually can grow. You have to get bad in order to get good.” – Paula Scher ',

'“If you do good work for good clients, it will lead to other good work for other good clients. If you do bad work for bad clients, it will lead to other bad work for other bad clients.” – Michael Bierut ',

'“The key to great ideas is not having them, it is executing them. And great ideas come from problems. As designers we call problems, briefs and we call reactions to problems, concepts.” – Kate Moross ',

'“If you can properly define the problem, then you’ve already defined the solution as well.” – Chip Kidd ',

'“But I find that for myself, without exception, the more I deal with the work as something that is my own, as something that is personal, the more successful it is.” – Marian Bantjes ',

'“The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.” – Paul Rand ',

'“Digital design is like painting, except the paint never dries.” – Neville Brody ',

'“What the visionaries had in common was a particular love of craft and a desire to play.” – Petrula Vrontikis ',

'“I want to make beautiful things, even if nobody cares, as opposed to ugly things. That’s my intent.” – Saul Bass ',

'“Graphic design will save the world right after rock and roll does.” – David Carson ',

'“To be a good artist / letterer / designer / guitar player, it takes practice. A lot of it. More than you can even fathom when you’re starting out.” – Jessica Hische ',

'“Good design is all about making other designers feel like idiots because that idea wasn’t theirs.” – Frank Chimero ',

'“I like to step into areas where I am afraid. Fear is a sign that I am going in the right direction.” – April Greiman ',

'“I strive for two things in design: simplicity and clarity. Great design is born of those two things.” – Lindon Leader ',

'“The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design.” – Massimo Vignelli ',

'“You can do a good ad without good typography, but you can’t do a great ad without good typography.” – Herb Lubalin ',

'“Information is only useful when it can be understood.” – Muriel Cooper ',


'"There’s time for the big jobs, and there’s time for the small jobs" - Aaron Draplin'];



function randomQuote (array) {
  let index = Math.floor(Math.random() * arr.length);
  quote.innerHTML = arr[index];
};


random.addEventListener('click' , () => {
  randomQuote(arr);
});